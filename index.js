const express = require("express");
const session = require("express-session");
const cors = require("cors");

const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/index");
require("./services/passport")(passport);

const setupRoutes = require("./routes/index");

// DATABASE CONNECTION
mongoose
  .connect(keys.mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("success connected to database" + "");
  })
  .catch(err => {
    console.log(err);
  });
// SETUP EXPRESS APP

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: "keyboard cat" }));
app.use(cors());

// SETUP ROUTES
setupRoutes(app);

// SETUP PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
