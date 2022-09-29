const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
  where: String,
  name: String,
  email: String,
  message: String,
},
{
    timestamps: true,
});

module.exports = mongoose.model("Form", formSchema);