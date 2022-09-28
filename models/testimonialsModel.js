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
    imgUrl: String,
    name: String,
    company: String,
    feedback: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Testimonials", testimonialsSchema);
