const express = require("express");
const app = express();
const PORT = 5000;

const myGroupRouter = require("./routes/routes.myGroup");
const _19110404Router = require("./routes/routes.19110404");
const messageRouter = require("./routes/routes.message");

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/", myGroupRouter);
app.use("/19110404", _19110404Router);
app.use("/message", messageRouter);

app.listen(PORT, () => {
  console.log("App listening on port 5000");
});
