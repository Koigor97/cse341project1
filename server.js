const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./model/swagger-output.json');
const dotenv = require('dotenv');
const { connectDB } = require('./model/db');
dotenv.config();
const app = require('./app');

//* connecting to mongodb
connectDB();

//* route to home page
app.get('/', (req, res) => {
  //#swagger.tags = ['Home']
  res.send('Hello World!');
});

//* route to swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//* starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
