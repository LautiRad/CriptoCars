import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let cachedDb;

export default async function connectToDatabase() {
  if (!cachedDb || !client.topology.isConnected()) {
    await client.connect();
    console.log("Connected to database");
    cachedDb = client.db("criptocars");
  }
  const db = client.db("criptocars");
  return { db };
}

// module.exports = connectToDatabase;
