const models = require("../models");
//call model schema
const TestmonialsDB = models.Testmonials;

//@desc Get Testmonials Info
//@route GET portfolio/en/Testmonials
const getTestmonials = (req, res) => {
  res.status(200).json({
    message: "GET",
  });
};
//@desc Add Testmonials Info
//@route POST portfolio/en/Testmonials
const postTestmonials = (req, res) => {
  res.status(200).json({
    message: "GET",
  });
};

//@desc update Testmonials Info
//@route PUT portfolio/en/Testmonials
const putTestmonials = (req, res) => {
  res.status(200).json({
    message: "PUT",
    req: req.params.id,
  });
};

//@desc Delete Testmonials Info
//@route DELETE portfolio/en/Testmonials
const deleteTestmonials = (req, res) => {
  res.status(200).json({
    message: "DELETE",
    req: req.params.id,
  });
};

module.exports = { getTestmonials, postTestmonials, putTestmonials, deleteTestmonials };
