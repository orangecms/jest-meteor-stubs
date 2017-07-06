const check = jest.fn();

const Match = {
  OneOf: jest.fn(),
  Optional: jest.fn(),
  Maybe: jest.fn(),
};

module.exports = {
  Match,
  check,
};
