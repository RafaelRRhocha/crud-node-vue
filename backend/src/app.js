const express = require('express');
const cors = require('cors');
const routes = require('./routes/users.router');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', routes);

module.exports = app;