const express = require("express");
require("dotenv").config();
require("./model");
const authRouter = require("./router/auth");
const serviceRouter = require("./router/service");
const roleRouter = require("./router/role");
const eventRouter = require("./router/event");
const billRouter = require("./router/bill");
const permissionRouter = require("./router/permission");
const tagRouter = require("./router/tag");
const userRouter = require("./router/user");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
//router
app.use("/", authRouter);
app.use("/service", serviceRouter);
app.use("/role", roleRouter);
app.use("/event", eventRouter);
app.use("/bill", billRouter);
app.use("/permission", permissionRouter);
app.use("/tag", tagRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
});
