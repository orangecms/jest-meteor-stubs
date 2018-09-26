export const FS = {
  Store: {
    GridFS: jest.fn(),
  },
  Collection: jest.fn(() => ({
    allow: jest.fn(),
  })),
};
