const mongoose = require('mongoose')

 /* { EXAMPLE
      name: "javascript",
      bgColor: "fff000",
      icon: images.figma,
    }, */

const skillsSchema = mongoose.Schema({
    name: String,
    bgColor: String,
    icon: String,
},
{
    timestamps: true
})

module.exports = mongoose.model('Skills', skillsSchema)