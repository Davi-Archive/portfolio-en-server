const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
},
{
    timestamps: true,
});

module.exports = mongoose.model("About", AboutSchema);