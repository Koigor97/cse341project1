const swaggerAutogen = require('swagger-autogen')();

const doc = {
  Info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },

  host: 'localhost:8000',
  schemes: ['http', 'https'],
  swagger: '2.0'
};

const outputFile = './model/swagger-output.json';
const endpointsFiles = ['./routes/contactsRoute.js'];

//* generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
