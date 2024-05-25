const express = require("express");

const app = express();

// port
const port = 5000;

// listen
app.listen(port, () => {
  console.log(`Server conntected to port ${port}`);
});
