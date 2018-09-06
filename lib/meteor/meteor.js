const { Mongo } = require('./mongo');

const Meteor = {
  isServer: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  methods: jest.fn(),
  call: jest.fn(),
  callPromise: jest.fn(),
  publish: jest.fn(),
  subscribe: jest.fn(),
  user: jest.fn(),
  users: new Mongo.Collection(),
  userId: jest.fn().mockReturnValue('f00bar'),
  startup: jest.fn(init => init),
  bindEnvironment: jest.fn(),
  wrapAsync: jest.fn(function(f) { return f; }),
  Error: jest.fn(Error),
};

module.exports = { Meteor };
