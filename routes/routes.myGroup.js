const express = require("express");
const router = express.Router();
const { myGroupRequest } = require("../controllers/controller.myGroup");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", myGroupRequest);

module.exports = router;
