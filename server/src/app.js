const express = require('express');
require('dotenv').config();
require('./database/config');
const {authRoute, serviceRoute} = require('./router');

const app = express();
const PORT = process.env.PORT || 4000; 
app.use(express.json());
//router
app.use('/', authRoute);
app.use('/', serviceRoute);


app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});