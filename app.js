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

/**
 * * using json middleware from express
 * * to parse json data from the request
 **/
app.use(express.json());

/**
 * * using cors middleware from express
 * * to allow cross-origin requests
 **/
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});

//* using the contacts route
app.use('/contacts', contactsRoute);

module.exports = app;
