const users = require('./user');
const classes = require('./class');
const calendar = require('./calendar');

const setupRoutes = app => {
    app.use('/api/users', users);
    app.use('/api/classes', classes);
    app.use('/api/calendar', classes);
};
module.exports = setupRoutes;
