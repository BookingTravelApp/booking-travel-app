const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
require('dotenv').config();
require('./model/Account');
const authRouter = require('./router/auth');

const app = express();
const PORT = process.env.PORT || 4000; 
app.use(express.json());
//router
app.use('/', authRouter);


app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});