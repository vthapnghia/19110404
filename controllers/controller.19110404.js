const { myGroup } = require("../models/models.myGroup");
const mssv = [19110404, 19110497, 19110380];

function addItem(req, res) {
  const ID = req.body.id;
  const findItem = myGroup.find((item) => Number(item.id) === Number(ID));
  if (mssv.includes(Number(ID)) && !findItem) {
    myGroup.push(req.body);
    res.status(200).json(req.body);
  } else {
    res.send("not valid");
  }
}

function getByID(req, res) {
  const ID = req.params.id;
  const getElement = myGroup.find((item) => Number(item.id) === Number(ID));
  if (getElement) {
    res.status(200).json(getElement);
  } else {
    res.status(404).json({ error: "not valid" });
  }
}

module.exports = { addItem, getByID };
