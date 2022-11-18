const express = require('express');
require('dotenv').config();
require('./database/config');
const cors = require('cors');
global.__basedir = __dirname;
const {authRoute, serviceRoute, uploadRoute} = require('./router');

const app = express();
const PORT = process.env.PORT || 4000; 
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:3001'],
    }),
)

console.log(process.cwd());

//router
app.use('/', authRoute);
app.use('/', serviceRoute);
app.use('/', uploadRoute);

app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});