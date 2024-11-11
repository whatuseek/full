var express = require("express");
const connectDB = require("./db");
// linking middleware
var signInRouter = require("./routes/signin");
// import cors from 'cors';
const cors = require('cors');

var app = express();
const port = 4000;
// Middleware to parse JSON request bodies
app.use(express.json());
// cors middleware
app.use(cors({origin:"*"}));
// Connect to the database before starting the server
connectDB();

// Configure Express app and routes here...
app.get("/", (req, res) => {
  res.send(" From Express js Hello World!");
});
app.get("/Hi", (req, res) => {
  res.send(" Hey Hi! You World!");
});
// Mount the signIn router on "/signin" and "/signup" (both are the same)
app.use("/signin", signInRouter); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
