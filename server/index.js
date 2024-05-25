const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.send("Hello");
});

// port
const port = process.env.PORT || 5000;

// listen
app.listen(port, () => {
  console.log(`Server conntected to port ${port}`);
});
