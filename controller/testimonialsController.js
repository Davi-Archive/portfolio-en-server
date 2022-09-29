const models = require("../models");
//call model schema
const TestimonialsDB = models.testimonials;

//@desc Get Testmonials Info
//@route GET portfolio/en/Testmonials
const getTestimonials = async (req, res) => {
  const find = await TestimonialsDB.find();
  res.status(200).json(find);
};
//@desc Add Testmonials Info
//@route POST portfolio/en/Testmonials
/*  name: String,
    company: String,
    feedback: String,
    imgUrl: String, */
const postTestimonials = async (req, res) => {
  const { name, company, feedback, imgUrl } = req.body;
  if (!name || !company || !feedback || !imgUrl)
    return res.status(400).json({
      message:
        "Wrong requisition, it needs: name:'',company:'',feedback:'',imgUrl:''",
    });

  const createTestimonial = await TestimonialsDB.create({
    name,
    company,
    feedback,
    imgUrl,
  });

  res.status(200).json({
    message: "Created Successfully.",
    createTestimonial,
  });
};

//@desc update Testmonials Info
//@route PUT portfolio/en/Testmonials

/* name": "Testimonial2",
    "company": "Company2",
    "feedback": "url aqui2",
    "imgUrl": "https://raw.githubusercontent.com/davi38/portfolio-en-client/main/src/assets/profile.png", */

const putTestimonials = async (req, res) => {
  const { name, company, feedback, imgUrl } = req.body;
  const find = await TestimonialsDB.findById(req.params.id);
  if (!find) return res.status(404).json({ message: "ID not found" });
  if (!name || !company || !feedback || !imgUrl)
    return res.status(400).json({
      message:
        "Wrong requisition, it needs atleast one to update: name:'',company:'',feedback:'',imgUrl:''",
    });
  if (!req.params.id)
    return res.status(400).json({ message: "specify the ID" });

  const update = await TestimonialsDB.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(update);
};

//@desc Delete Testmonials Info
//@route DELETE portfolio/en/Testmonials
const deleteTestimonials = async (req, res) => {
  const find = await TestimonialsDB.findById(req.params.id);
  if (!find) return res.status(404).json({ message: "ID not found" });

  const deleteValue = await TestimonialsDB.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Sucessfully deleted",
    deleteValue,
  });
};

module.exports = {
  getTestimonials,
  postTestimonials,
  putTestimonials,
  deleteTestimonials,
};
