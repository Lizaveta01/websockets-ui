export const WS_COMMAND_TYPES = {
  CREATE_GAME: 'create_game',
  CREATE_ROOM: 'create_room',
  UPDATE_ROOM: 'update_room',
  UPDATE_WINNERS: 'update_winners',
  ADD_USER_TO_ROOM: 'add_user_to_room',
  ADD_SHIPS: 'add_ships',
  START_GAME: 'start_game',
  REG: 'reg',
  ATTACK: 'attack',
  TURN: 'turn',
  FINISH: 'finish',
  RANDOM_ATTACK: 'randomAttack',
  SINGLE_PLAY: 'single_play',
};

export const ATTACK_STATUSES = {
  SHOT: 'shot',
  KILLED: 'killed',
  MISS: 'miss',
};

export const BOT_ID = 'bot_index';

export const WS_ADDRESS = 'ws://localhost:3000';

export const BOT_SHIPS_PLACEMENT_VARIANTS = [
  [
    [
      { x: 4, y: 5, hit: false, direction: false },
      { x: 5, y: 5, hit: false, direction: false },
      { x: 6, y: 5, hit: false, direction: false },
      { x: 7, y: 5, hit: false, direction: false },
    ],
    [
      { x: 5, y: 3, hit: false, direction: false },
      { x: 6, y: 3, hit: false, direction: false },
      { x: 7, y: 3, hit: false, direction: false },
    ],
    [
      { x: 8, y: 7, hit: false, direction: true },
      { x: 8, y: 8, hit: false, direction: true },
      { x: 8, y: 9, hit: false, direction: true },
    ],
    [
      { x: 0, y: 6, hit: false, direction: false },
      { x: 1, y: 6, hit: false, direction: false },
    ],
    [
      { x: 3, y: 0, hit: false, direction: true },
      { x: 3, y: 1, hit: false, direction: true },
    ],
    [
      { x: 1, y: 3, hit: false, direction: false },
      { x: 2, y: 3, hit: false, direction: false },
    ],
    [{ x: 7, y: 0, hit: false, direction: true }],
    [{ x: 6, y: 7, hit: false, direction: true }],
    [{ x: 5, y: 0, hit: false, direction: true }],
    [{ x: 9, y: 2, hit: false, direction: false }],
  ],
  [
    [
      { x: 5, y: 3, hit: false, direction: false },
      { x: 6, y: 3, hit: false, direction: false },
      { x: 7, y: 3, hit: false, direction: false },
      { x: 8, y: 3, hit: false, direction: false },
    ],
    [
      { x: 5, y: 5, hit: false, direction: true },
      { x: 5, y: 6, hit: false, direction: true },
      { x: 5, y: 7, hit: false, direction: true },
    ],
    [
      { x: 2, y: 4, hit: false, direction: true },
      { x: 2, y: 5, hit: false, direction: true },
      { x: 2, y: 6, hit: false, direction: true },
    ],
    [
      { x: 7, y: 5, hit: false, direction: false },
      { x: 8, y: 5, hit: false, direction: false },
    ],
    [
      { x: 1, y: 2, hit: false, direction: false },
      { x: 2, y: 2, hit: false, direction: false },
    ],
    [
      { x: 5, y: 0, hit: false, direction: false },
      { x: 6, y: 0, hit: false, direction: false },
    ],
    [{ x: 8, y: 0, hit: false, direction: true }],
    [{ x: 0, y: 4, hit: false, direction: false }],
    [{ x: 9, y: 7, hit: false, direction: true }],
    [{ x: 0, y: 6, hit: false, direction: false }],
  ],
  [
    [
      { x: 8, y: 3, hit: false, direction: true },
      { x: 8, y: 4, hit: false, direction: true },
      { x: 8, y: 5, hit: false, direction: true },
      { x: 8, y: 6, hit: false, direction: true },
    ],
    [
      { x: 2, y: 4, hit: false, direction: false },
      { x: 3, y: 4, hit: false, direction: false },
      { x: 4, y: 4, hit: false, direction: false },
    ],
    [
      { x: 4, y: 9, hit: false, direction: false },
      { x: 5, y: 9, hit: false, direction: false },
      { x: 6, y: 9, hit: false, direction: false },
    ],
    [
      { x: 4, y: 1, hit: false, direction: false },
      { x: 5, y: 1, hit: false, direction: false },
    ],
    [
      { x: 0, y: 1, hit: false, direction: false },
      { x: 1, y: 1, hit: false, direction: false },
    ],
    [
      { x: 7, y: 0, hit: false, direction: true },
      { x: 7, y: 1, hit: false, direction: true },
    ],
    [{ x: 0, y: 5, hit: false, direction: false }],
    [{ x: 6, y: 6, hit: false, direction: true }],
    [{ x: 1, y: 8, hit: false, direction: true }],
    [{ x: 3, y: 6, hit: false, direction: true }],
  ],
  [
    [
      { x: 0, y: 2, hit: false, direction: false },
      { x: 1, y: 2, hit: false, direction: false },
      { x: 2, y: 2, hit: false, direction: false },
      { x: 3, y: 2, hit: false, direction: false },
    ],
    [
      { x: 5, y: 2, hit: false, direction: false },
      { x: 6, y: 2, hit: false, direction: false },
      { x: 7, y: 2, hit: false, direction: false },
    ],
    [
      { x: 1, y: 6, hit: false, direction: true },
      { x: 1, y: 7, hit: false, direction: true },
      { x: 1, y: 8, hit: false, direction: true },
    ],
    [
      { x: 6, y: 4, hit: false, direction: false },
      { x: 7, y: 4, hit: false, direction: false },
    ],
    [
      { x: 7, y: 6, hit: false, direction: true },
      { x: 7, y: 7, hit: false, direction: true },
    ],
    [
      { x: 3, y: 7, hit: false, direction: false },
      { x: 4, y: 7, hit: false, direction: false },
    ],
    [{ x: 9, y: 8, hit: false, direction: false }],
    [{ x: 9, y: 3, hit: false, direction: false }],
    [{ x: 2, y: 0, hit: false, direction: false }],
    [{ x: 3, y: 5, hit: false, direction: false }],
  ],
  [
    [
      { x: 8, y: 1, hit: false, direction: true },
      { x: 8, y: 2, hit: false, direction: true },
      { x: 8, y: 3, hit: false, direction: true },
      { x: 8, y: 4, hit: false, direction: true },
    ],
    [
      { x: 1, y: 1, hit: false, direction: false },
      { x: 2, y: 1, hit: false, direction: false },
      { x: 3, y: 1, hit: false, direction: false },
    ],
    [
      { x: 3, y: 3, hit: false, direction: true },
      { x: 3, y: 4, hit: false, direction: true },
      { x: 3, y: 5, hit: false, direction: true },
    ],
    [
      { x: 3, y: 7, hit: false, direction: true },
      { x: 3, y: 8, hit: false, direction: true },
    ],
    [
      { x: 5, y: 0, hit: false, direction: true },
      { x: 5, y: 1, hit: false, direction: true },
    ],
    [
      { x: 0, y: 5, hit: false, direction: false },
      { x: 1, y: 5, hit: false, direction: false },
    ],
    [{ x: 5, y: 5, hit: false, direction: false }],
    [{ x: 0, y: 7, hit: false, direction: false }],
    [{ x: 0, y: 3, hit: false, direction: false }],
    [{ x: 8, y: 6, hit: false, direction: false }],
  ],
];