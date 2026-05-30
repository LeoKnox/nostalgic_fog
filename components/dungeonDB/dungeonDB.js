let dungeonDB = {
  1: {
    id: 1,
    width: 5,
    length: 5,
    connectedRooms: [2, 3],
  },
  2: {
    id: 2,
    width: 6,
    length: 6,
    connectedRooms: [1],
  },
  3: {
    id: 3,
    width: 5,
    length: 5,
    connectedRooms: [1],
  },
};

export const roomDB = (roomId = 1) => {
  return dungeonDB[roomId];
};
