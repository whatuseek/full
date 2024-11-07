const express = require("express");
const connectDB = require("./db");

const app = express();
const port = 3000;

// Connect to the database before starting the server
connectDB();

// Configure Express app and routes here...

app.get("/", (req, res) => {
  res.send(" From Express js Hello World!");
});

app.get("/Hi", (req, res) => {
  res.send(" Hey Hi! You World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
