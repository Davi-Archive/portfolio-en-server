const mongoose = require('mongoose')

/* {  EXAMPLE
    title: "Web Development",
    projectLink: "#",
    codeLink: "#",
    imgUrl: images.about01,
    description: "Worked Here long time ago.",
    name: "Davi",
    tags: ["Software Industrie 2","3","4"],
  }, */

const workSchema = new mongoose.Schema({
  title: String,
  projectLink: String,
  codeLink: String,
  imgUrl: String,
  description: String,
  name: String,
  tags: [String],
},
{
  timestamps: true
});

module.exports = mongoose.model('Work', workSchema)