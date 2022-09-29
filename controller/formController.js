const model = require("../models");
const formDB = model.form;

//@desc Get Contact messsages Info
//@route GET portfolio/contact
//@access Private
const getForm = async (req, res) => {
  const find = await formDB.find();
  return res.status(200).json(find);
};

//@desc Get About Info
//@route GET portfolio/contact
//@access Private
const postForm = async (req, res) => {
  const { where, name, email, message } = req.body;
  if (!where || !name || !email || !message) return res.status(400).json({message: 'missing information, need: name, where, email and message'});
    const create = await formDB.create({
        where,
        name,
        email,
        message
    })
    return res.status(200).json(create)
};

module.exports = { getForm, postForm };
