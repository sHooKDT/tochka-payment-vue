const { MongoClient, ObjectID } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "payment-app";

// Create a new MongoClient
const client = new MongoClient(url);

async function execWithConnection(func) {
  if (!client.isConnected()) {
    await client.connect();
  }

  return await func(client.db(dbName));
}

function store(collection, doc) {
  return execWithConnection(db => db.collection(collection).insertOne(doc));
}

function fetch(collection) {
  return execWithConnection(db =>
    db
      .collection(collection)
      .find()
      .toArray()
  );
}

function fetchSorted(collection, sortBy) {
  return execWithConnection(db =>
    db
      .collection(collection)
      .find()
      .sort({ [sortBy]: 1 })
      .toArray()
  );
}

function findInCollectionById(collection, id) {
  return execWithConnection(db =>
    db.collection(collection).findOne({ _id: new ObjectID(id) })
  );
}

function changeDocument(collection, id, fields) {
  return execWithConnection(db =>
    db.collection(collection).update({ _id: new ObjectID(id) }, fields)
  );
}

module.exports = {
  store,
  fetch,
  fetchSorted,
  findInCollectionById,
  changeDocument
};
