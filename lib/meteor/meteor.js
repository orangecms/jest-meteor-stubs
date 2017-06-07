const Meteor = {
  isServer: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  methods: jest.fn(),
  call: jest.fn(),
  publish: jest.fn(),
  subscribe: jest.fn(),
  user: jest.fn(),
  userId: jest.fn().mockReturnValue('f00bar'),
  Error: jest.fn(),
};

module.exports = { Meteor };
