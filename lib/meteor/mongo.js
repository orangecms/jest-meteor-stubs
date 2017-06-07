const Collection = jest.fn();
Collection.prototype.attachSchema = jest.fn();
Collection.prototype.insert = jest.fn();
Collection.prototype.update = jest.fn();
Collection.prototype.remove = jest.fn();
Collection.prototype.count = jest.fn();
Mongo = { Collection };

const RemoteCollectionDriver = jest.fn();
RemoteCollectionDriver.prototype.find = jest.fn();
RemoteCollectionDriver.prototype.open = jest.fn().mockReturnThis();
MongoInternals = { RemoteCollectionDriver };

module.exports = {
  Mongo,
  MongoInternals,
};
