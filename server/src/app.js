const express = require('express');
require('dotenv').config();
require('./model');
const authRouter = require('./router/auth');
const tourRouter = require('./router/event');

const app = express();
const PORT = process.env.PORT || 4000; 
app.use(express.json());
//router
app.use('/', authRouter);
app.use('/', tourRouter);


app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});