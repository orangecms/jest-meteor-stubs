const mongo = require('./mongo');

const Meteor = {
  isServer: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  methods: jest.fn(),
  call: jest.fn(),
  publish: jest.fn(),
  subscribe: jest.fn(),
  user: jest.fn(),
  users: new mongo.Mongo.Collection(),
  userId: jest.fn().mockReturnValue('f00bar'),
  startup: jest.fn(),
  bindEnvironment: jest.fn(),
  wrapAsync: jest.fn(),
  Error: jest.fn(),
};

module.exports = { Meteor };
