const models = require("../models");
//call model schema
const skillsDB = models.skills;

//@desc Get Skills Info
//@route GET portfolio/en/skills
const getSkills = (req, res) => {
  res.status(200).json({
    message: "GET",
  });
};
//@desc Add Skills Info
//@route POST portfolio/en/skills
const postSkills = (req, res) => {
  res.status(200).json({
    message: "GET",
  });
};

//@desc update Skills Info
//@route PUT portfolio/en/skills
const putSkills = (req, res) => {
  res.status(200).json({
    message: "PUT",
    req: req.params.id,
  });
};

//@desc Delete skills Info
//@route DELETE portfolio/en/skills
const deleteSkills = (req, res) => {
  res.status(200).json({
    message: "DELETE",
    req: req.params.id,
  });
};



module.exports ={getSkills,postSkills,putSkills,deleteSkills}
