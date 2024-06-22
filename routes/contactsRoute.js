const express = require('express');
const contactsController = require('../controller/contactsController');

//* using the express router function
const router = express.Router();

// //* using swagger middleware
// router.use('/', require('./swagger'));

//* defining the contacts routes
router
  .route('/')
  .get(contactsController.getAllContacts)
  .post(contactsController.createContacts);

router
  .route('/:id')
  .get(contactsController.getSingleContact)
  .put(contactsController.updateContacts)
  .delete(contactsController.deleteContacts);

module.exports = router;
