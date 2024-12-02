import { MongoClient, MongoClientOptions } from 'mongodb';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

console.log(
  `loaded environment: ${process.env.NODE_ENV} - ${process.env.MONGODB_URL}`,
);

const MONGO_URL =
  process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/fico';

export const getDb = async () => {
  const client: MongoClient = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions);
  return client.db();
};
