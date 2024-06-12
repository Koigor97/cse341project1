const express = require("express");
const contactsController = require("../controller/contactsController");

// using the express router function
const router = express.Router();

// defing the contacts routes
router
  .route("/")
  .get(contactsController.getAllContacts)
  .post(contactsController.createContacts);

router.route("/:id").get(contactsController.getSingleContact);

module.exports = router;
