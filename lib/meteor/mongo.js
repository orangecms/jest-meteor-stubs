const Collection = jest.fn();
Collection.prototype.attachSchema = jest.fn();
Mongo = { Collection };

const RemoteCollectionDriver = jest.fn();
MongoInternals = { RemoteCollectionDriver };

module.exports = {
  Mongo,
  MongoInternals,
};
