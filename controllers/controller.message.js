const { myGroup } = require("../models/models.myGroup");

function getData(req, res) {
  const ID = req.params.id;
  if (ID) {
    const findItem = myGroup.find((item) => Number(item.id) === Number(ID));
    if (findItem) {
      res
        .status(200)
        .send(`<html><body><ul><li> ${findItem.name}</li></ul></body></html>`);
    } else {
      res.status(404).send("Not valid");
    }
  } else {
    let elementHTML = "<html><body><ul>";
    myGroup.forEach((element) => {
      elementHTML += `<li> ${element.name}</li>`;
    });
    elementHTML += "</ul></body></html>";
    res.status(200).send(elementHTML);
  }
}

module.exports = { getData };
