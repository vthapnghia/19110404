const express = require("express");
const router = express.Router();

const { addItem, getByID } = require("../controllers/controller.19110404");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.post("/", addItem);
router.get("/:id", getByID);

module.exports = router;
