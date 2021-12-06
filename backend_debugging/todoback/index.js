const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
const cors = require('cors')
const morgan = require("morgan");
require("dotenv").config()
require("./db");
// dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())



app.use(morgan("tiny"));
const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);
// dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
