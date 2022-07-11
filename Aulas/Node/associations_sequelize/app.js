const express = require('express');
const bodyParser = require('body-parser');
const employeesRouter = require('./src/routes/EmployeesRouter');
const usersRouter = require('./src/routes/UsersRouter');

const app = express();

app.use(bodyParser.json());
app.use('/employees', employeesRouter);
app.use('/userbooks', usersRouter);

module.exports = app;