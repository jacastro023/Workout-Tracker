//required npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// required for morgan npm
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://user1:password1@ds147520.mlab.com:47520/heroku_lr7bf1fm', {
  useNewUrlParser: true,
  useMongoClient: true
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

// listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});