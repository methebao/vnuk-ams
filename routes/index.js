const users = require('./user');
const classes = require('./class');

const setupRoutes = app => {
    app.use('/api/users', users);
    app.use('/api/classes', classes);
};
module.exports = setupRoutes;
