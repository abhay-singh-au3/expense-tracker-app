const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;
const connectDB = require('./config/config');
connectDB();

const users = require('./routes/users');
const incomes = require('./routes/incomes');
const expenses = require('./routes/expenses');

const auth = require('./auth');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use('/users', users);
app.use('/incomes', auth, incomes);
app.use('/expenses', auth, expenses);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
