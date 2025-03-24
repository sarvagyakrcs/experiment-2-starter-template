const { MongoClient } = require('mongodb');

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db();
  return { db, client };
}

module.exports = connectToDatabase;