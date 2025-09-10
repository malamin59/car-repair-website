import { MongoClient, ServerApiVersion } from "mongodb";

export default function dbConnect(collectionName) {
  try {
    const   uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    return client.db(process.env.DB_NAME).collection(collectionName);
  } catch (error) {
    console.log(error);
  }
}
