import { WebSocketServer, WebSocket } from 'ws';
import crypto from 'node:crypto';

import {
  createBotConnection,
  createGame,
  createRoomWithUser,
  defineGameData,
  handleAttack,
  handleWsSendEvent,
  startGame,
} from 'handlers';

import {
  IClientData,
  IClients,
  IGame,
  IPlayers,
  IRegData,
  IRoom,
} from './types';
import { WS_COMMAND_TYPES } from './constants';
import sendBotRandomAttack from 'utils/sendBotRandomAttack';

const state = {
  rooms: [] as IRoom[],
  userName: '',
  gameData: {} as IGame,
  shooterId: '',
  gameWithBot: false,
  botWebsocket: {} as WebSocket,
};

export const wsServer = new WebSocketServer({ port: 3000 });

export const handleWsMessageEvent = (
  ws: WebSocket,
  userId: string,
  clients: IClients,
) => {
  ws.on('message', (message: IRegData) => {
    const parsedMessage = JSON.parse(message.toString());

    if (parsedMessage?.type === WS_COMMAND_TYPES.REG) {
      const parsedData = JSON.parse(parsedMessage?.data?.toString());
      state.userName = parsedData?.name;
      (clients[userId] as IClientData).userName = state.userName;

      const data = {
        name: parsedData?.name,
        index: userId,
        error: false,
        errorText: '',
      };

      handleWsSendEvent(ws, WS_COMMAND_TYPES.REG, data);
      handleWsSendEvent(ws, WS_COMMAND_TYPES.UPDATE_WINNERS, []);
      handleWsSendEvent(ws, WS_COMMAND_TYPES.UPDATE_ROOM, state.rooms);
    }

    if (parsedMessage?.type === WS_COMMAND_TYPES.CREATE_ROOM) {
      const roomWithOneUser = state.rooms.find(
        (room) => room.roomUsers.length === 1,
      );

      // block possibility create more then 1 room for active session
      if (roomWithOneUser) return;

      const userName = clients[userId]?.userName as string;

      createRoomWithUser(state.rooms, userName, userId);
    }

    if (parsedMessage?.type === WS_COMMAND_TYPES.SINGLE_PLAY) {
      state.botWebsocket = createBotConnection();

      const gameId = crypto.randomUUID();
      state.gameWithBot = true;

      const gameDataResponse = {
        idGame: gameId,
        idPlayer: userId,
      };

      handleWsSendEvent(ws, WS_COMMAND_TYPES.CREATE_GAME, gameDataResponse);
    }

    if (parsedMessage?.type === WS_COMMAND_TYPES.ADD_USER_TO_ROOM) {
      const parsedData = JSON.parse(parsedMessage?.data?.toString());

      state.rooms = createGame(state.rooms, parsedData, userId, clients);
    }

    if (parsedMessage?.type === WS_COMMAND_TYPES.ADD_SHIPS) {
      const parsedData = JSON.parse(parsedMessage?.data?.toString());

      defineGameData(parsedData, state.gameData, state.gameWithBot);

      state.shooterId = startGame(
        state.gameData,
        parsedData.gameId,
        state.shooterId,
        clients,
      );
    }

    if (
      parsedMessage?.type === WS_COMMAND_TYPES.ATTACK ||
      parsedMessage?.type === WS_COMMAND_TYPES.RANDOM_ATTACK
    ) {
      const parsedData = JSON.parse(parsedMessage?.data?.toString());

      // ignore out of turn attacks
      if (state.shooterId !== parsedData.indexPlayer) return;

      const { updatedGameData, updatedShooterId } = handleAttack(
        clients,
        state.gameData,
        parsedMessage,
        state.shooterId,
        state.rooms,
      );

      const isGameFinished = !Object.keys(
        updatedGameData[parsedData?.gameId] as IPlayers,
      ).length;

      if (isGameFinished && state.botWebsocket.readyState === WebSocket.OPEN) {
        state.botWebsocket.close();
      }

      sendBotRandomAttack(
        updatedShooterId,
        parsedData?.gameId,
        isGameFinished,
        state.botWebsocket,
      );

      state.gameData = updatedGameData;
      state.shooterId = updatedShooterId;
    }
  });
};