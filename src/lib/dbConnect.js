import { MongoClient, ServerApiVersion } from "mongodb";
// Import MongoDB driver and versioning API

const uri = process.env.MONGO_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1, // use stable API v1
    strict: true, // throw error if using deprecated features
    deprecationErrors: true, // log errors for deprecated MongoDB commands
  },
};

let client;
let clientPromise;
if (!uri) {
  throw new Error("Please add MONGO_URI to your .env.local");
}


if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const collections = { SERVICES: "Services-collection" };

export async function dbConnect(name) {
  const client = await clientPromise;
  return client.db(process.env.DB_NAME).collection(name);
}