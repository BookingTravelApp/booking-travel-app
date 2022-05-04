const express = require('express');
require('dotenv').config();
require('./database/config');
global.__basedir = __dirname;
const {authRoute, serviceRoute, uploadRoute} = require('./router');

const app = express();
const PORT = process.env.PORT || 4000; 
app.use(express.json());

console.log(process.cwd());

//router
app.use('/', authRoute);
app.use('/', serviceRoute);
app.use('/', uploadRoute);

app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});