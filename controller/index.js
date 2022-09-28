const about = require("./aboutController.js");
const skills = require("./skillsController.js");
const testimonials = require("./testimonialsController.js");
const work = require("./workController.js");

module.exports={
    ...about,
    ...skills,
    ...work,
    ...testimonials
}
