const About = require("../models");


//@desc Get About Info
//@route GET portfolio/en/about
//@access Private
const getAbout = async (req, res) => {
  res.status(200).json({ msg: "get" });
};

//@desc Post About Info
//@route POST portfolio/en/about
//@access Private
const postAbout = async (req, res) => {
  res.status(200).json({ msg: "post", body: req.body});
};

//@desc Put About Info
//@route PUT portfolio/en/about
//@access Private
const putAbout = async (req, res) => {
   res.status(200).json({
     id: req.params.id,
     msg: "put",
   });
};

//@desc Delete About Info
//@route DELETE portfolio/en/about
//@access Private
const deleteAbout = async (req, res) => {
  res.status(200).json({
    id: req.params.id,
    msg: "delete",
  });
};

module.exports = { getAbout, postAbout, putAbout, deleteAbout };
