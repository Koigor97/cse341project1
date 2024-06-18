const express = require('express');
const morgan = require('morgan');
const contactsRoute = require('./routes/contactsRoute');

//* instantiating express framework
const app = express();

/**
 * * using morgan middleware for logging requests data
 * * if the node environment is not production
 **/

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

//* using json middleware from express
//* to parse json data from the request
app.use(express.json());

//* using the contacts route
app.use('/contacts', contactsRoute);

module.exports = app;
