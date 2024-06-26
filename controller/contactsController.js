const { getContactsCollection } = require('../model/db');
const { ObjectId } = require('mongodb');

//* getting all contacts
exports.getAllContacts = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const Contacts = getContactsCollection();
    const result = await Contacts.find({}).toArray();
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//* getting a single contact
exports.getSingleContact = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const Contacts = getContactsCollection();
    const { id } = req.params;
    const result = await Contacts.findOne({ _id: new ObjectId(id) });
    if (!result) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//* creating a new contact
exports.createContacts = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const Contacts = getContactsCollection();
    const contact = req.body;
    const result = await Contacts.insertMany(contact);

    if (!result) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact creation failed'
      });
    }

    res.status(201).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//* updating a contact
exports.updateContacts = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const Contacts = getContactsCollection();
    const { id } = req.params;
    const contact = req.body;
    console.log(contact);
    const updateDoc = { $set: contact };
    const result = await Contacts.updateOne(
      {
        _id: new ObjectId(id)
      },
      updateDoc
    );

    if (!result) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//* deleting a contact
exports.deleteContacts = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const Contacts = getContactsCollection();
    const { id } = req.params;
    const result = await Contacts.deleteOne({ _id: new ObjectId(id) });
    if (!result) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
