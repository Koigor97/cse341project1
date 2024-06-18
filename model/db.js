// db.js
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const contactsSchema = require('./contactsSchema');
dotenv.config();

//* connecting to mongodb
const client = new MongoClient(
  process.env.MONGO_DB_URI.replace('<PASSWORD>', process.env.MONGO_DB_PASSWORD)
);

let Contacts;

//* connecting to mongodb
async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    Contacts = client
      .db('cse341project1')
      .collection('contacts', contactsSchema);
  } catch (error) {
    console.error(error);
  }
}

//* getting contacts collection
function getContactsCollection() {
  if (!Contacts) {
    throw new Error('Contacts collection not initialized');
  }
  return Contacts;
}

module.exports = { connectDB, getContactsCollection };
