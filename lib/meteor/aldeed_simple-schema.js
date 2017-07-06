const SimpleSchema = jest.fn();
SimpleSchema.extendOptions = jest.fn();
SimpleSchema.messages = jest.fn();
SimpleSchema.prototype.messages = jest.fn();
SimpleSchema.prototype.validator = jest.fn();
SimpleSchema.RegEx = {
  Id: jest.fn(),
};

module.exports = { SimpleSchema };
