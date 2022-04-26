const express = require("express");
require("dotenv").config();
require("./model");
const authRouter = require("./router/auth");
const serviceRouter = require("./router/service");
const roleRouter = require("./router/role");
const eventRouter = require("./router/event");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
//router
app.use("/", authRouter);
app.use("/service", serviceRouter);
app.use("/role", roleRouter);
app.use("/event", eventRouter);

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
});
