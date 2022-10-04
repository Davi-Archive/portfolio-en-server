const userDB = require("../models");

const getUser = (req, res) => {
  res.status(200).json("get user");
};

module.exports = { getUser };
