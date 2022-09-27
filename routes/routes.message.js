const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/controller.message");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/:id?", getData);
module.exports = router;
