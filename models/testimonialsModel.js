const mongoose = require("mongoose");

/* {
      imgUrl: images.flutter,
      name: "Testimonial",
      company: "Company",
      feedback: images.about01,
    },
 */

const testimonialsSchema = mongoose.Schema(
  {
    name: String,
    company: String,
    feedback: String,
    imgUrl: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Testimonials", testimonialsSchema);
