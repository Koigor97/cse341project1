const dotenv = require("dotenv");
const { connectDB } = require("./model/db");
dotenv.config();
const app = require("./app");

// connecting to mongodb
connectDB();

// route to home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
