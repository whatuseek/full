const express = require("express");
const connectDB = require("./db");
// import cors from 'cors';
const cors = require('cors');
var signInRouter = require("./routes/signin");

const app = express();
const port = 3000;
// Middleware to parse JSON request bodies
app.use(express.json());
// cors middleware
app.use(cors({origin:'*'}));

// Connect to the database before starting the server
connectDB();

// Configure Express app and routes here...

app.get("/", (req, res) => {
  res.send(" From Express js Hello World!");
});

// Mount the signIn router on "/signin" and "/signup" (both are the same)
app.use("/signin", signInRouter); 


app.get("/Hi", (req, res) => {
  res.send(" Hey Hi! You World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
