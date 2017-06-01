const SimpleSchema = jest.fn();
SimpleSchema.prototype.validator = jest.fn();

module.exports = { SimpleSchema };
