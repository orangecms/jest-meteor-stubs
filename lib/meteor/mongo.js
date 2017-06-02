const Collection = jest.fn();
Collection.prototype.attachSchema = jest.fn();
Mongo = { Collection };

const RemoteCollectionDriver = jest.fn();
RemoteCollectionDriver.prototype.find = jest.fn();
RemoteCollectionDriver.prototype.open = jest.fn().mockReturnThis();
MongoInternals = { RemoteCollectionDriver };

module.exports = {
  Mongo,
  MongoInternals,
};
