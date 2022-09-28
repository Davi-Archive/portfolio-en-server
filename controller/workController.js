const model = require("../models");

const workDB = model.work;

//@desc Get Work Info
//@route GET portfolio/en/work

const getWork = (req, res) => {
  res.status(200).json({
    message: "GET",
  });
};
//@desc post Work Info
//@route POST portfolio/en/work

const postWork = (req, res) => {
  res.status(200).json({
    message: "GET",
  });
};
//@desc update Work Info
//@route PUT portfolio/en/work

const putWork = (req, res) => {
  res.status(200).json({
    message: "PUT",
    req: req.params.id,
  });
};
//@desc Delete Work Info
//@route DELETE portfolio/en/work

const deleteWork = (req, res) => {
  res.status(200).json({
    message: "DELETE",
    req: req.params.id,
  });
};

module.exports = { getWork, postWork, putWork, deleteWork };
