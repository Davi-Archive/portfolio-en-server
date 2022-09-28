const about = require("./aboutController.js");
const skills = require("./skillsController.js");
const testmonials = require("./testmonialsController.js");
const work = require("./workController.js");

module.exports={
    ...about,
    ...skills,
    ...work,
    ...testmonials
}
