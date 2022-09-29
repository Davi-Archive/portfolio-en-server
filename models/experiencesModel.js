const mongoose = require('mongoose');

const experiencesSchema = mongoose.Schema({
  year: String,
  name: String,
  bgColor: String,
  icon: String,
  desc: String,
  company: String,
},
{
    timestamps: true
});

module.exports = mongoose.model('Experiences',experiencesSchema);