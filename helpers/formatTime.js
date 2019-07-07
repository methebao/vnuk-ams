const moment = require("moment");

module.exports = dateTime => {
  return moment(dateTime).toISOString();
};
