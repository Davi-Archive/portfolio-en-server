const about = require("./aboutController.js");
const skills = require("./skillsController.js");
const testimonials = require("./testimonialsController.js");
const work = require("./workController.js");
const form = require("./formController.js");

module.exports={
    ...about,
    ...skills,
    ...work,
    ...testimonials,
    ...form
}
