const meteorStub = require('jest-meteor-mocks/packages/meteor').meteor;
const nop = () => null;
const Meteor = Object.keys(meteorStub).reduce(
  (a, k) => Object.assign(a, { [k]: nop }), {}
);
/*
const Meteor = {
  isServer: true,
  methods: nop,
  call: nop,
  publish: nop,
  subscribe: nop,
};
*/
Object.keys(Meteor).forEach(func => jest.spyOn(Meteor, func));

module.exports = { Meteor };
