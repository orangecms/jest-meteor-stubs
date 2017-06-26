const SimpleSchema = jest.fn();
SimpleSchema.prototype.validator = jest.fn();
SimpleSchema.RegEx = {
  Id: jest.fn(),
};

module.exports = { SimpleSchema };
