const { MongoClient } = require('mongodb');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

if (!MONGO_URI) {
  throw new Error('uri does not exist!');
}

const connect = async () => {
  await client.connect();
  return client;
};

const disconnect = async () => {
  await client.close();
};

module.exports = { connect, disconnect };
