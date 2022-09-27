const { myGroup } = require("../models/models.myGroup");

function myGroupRequest(req, res) {
  res.status(200).json(myGroup);
}

module.exports = { myGroupRequest };
