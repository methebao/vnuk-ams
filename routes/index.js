const users = require("./user");
const classes = require("./class");
const calendar = require("./calendar");
const events = require("./event");
const uploads = require("./upload");

const setupRoutes = app => {
  app.use("/api/users", users);
  app.use("/api/classes", classes);
  app.use("/api/calendar", calendar);
  app.use("/api/events", events);
  app.use("/api/uploads", uploads);
};
module.exports = setupRoutes;
