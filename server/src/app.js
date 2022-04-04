const express = require('express');
const bodyParse = require('body-parser');
require('dotenv').config();
const authRouter = require('./router/auth');

const app = express();
const PORT = process.env.PORT || 4000; 
app.use(express.json());
//router
app.use('/', authRouter);


app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});