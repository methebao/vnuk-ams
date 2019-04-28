const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const ObjectId = mongoose.Types.ObjectId;

require('./models/User');
require('./services/passport')(passport);
const User = mongoose.model('user');

const users = require('./routes/user');

mongoose
    .connect(keys.mongoURL, { useNewUrlParser: true })
    .then(() => {
        console.log('success');
    })
    .catch(err => {
        console.log(err);
    });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send({
        hi: 'there',
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
