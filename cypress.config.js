const { defineConfig } = require('cypress');
require('dotenv').config();
const { connect, disconnect } = require('./db');

const setupNodeEvents = async (on, config) => {
  on('task', {
    async insertMany({ collectionName }) {
      try {
        const db = (await connect()).db('MovieDb');
        await db.command({ ping: 1 });
        console.log(`Connected successfully to server: ${db.databaseName}`);
        const movies = db.collection(collectionName);
        const docs = [
          {
            title: 'Jurassic World: Fallen Kingdom',
            genres: ['Action', 'Sci-Fi'],
            runtime: 130,
            rated: 'PG-13',
            year: 2018,
            directors: ['J. A. Bayona'],
            cast: ['Chris Pratt', 'Bryce Dallas Howard', 'Rafe Spall'],
            type: 'movie',
          },
          {
            title: 'Tag',
            genres: ['Comedy', 'Action'],
            runtime: 105,
            rated: 'R',
            year: 2018,
            directors: ['Jeff Tomsic'],
            cast: ['Annabelle Wallis', 'Jeremy Renner', 'Jon Hamm'],
            type: 'movie',
          },
        ];
        const options = { ordered: true };
        const result = await movies.insertMany(docs, options);
        if ((await movies.countDocuments()) === 0) {
          throw new Error('No documents found!');
        }
        console.log(`${result.insertedCount} documents were inserted`);
        return result;
      } finally {
        await disconnect();
      }
    },

    async findMovieByTitle({ titleName }) {
      try {
        const db = (await connect()).db('MovieDb');
        const collection = db.collection('Movies');
        if ((await collection.countDocuments()) === 0) {
          throw new Error('No documents found!');
        }
        const cursor = collection.find({ title: { $eq: titleName } });
        return await cursor.next();
      } finally {
        await disconnect();
      }
    },
  });

  return config;
};

module.exports = defineConfig({
  env: {
    mongo_uri: process.env.MONGO_URI,
  },
  e2e: {
    setupNodeEvents,
    responseTimeout: 10000,
    video: false,
  },
});
