const express = require('express')
const router = express.Router()

const controller = require('../controller')

router.route("/").get(controller.getTestimonials).post(controller.postTestimonials);

router.route("/:id").put(controller.putTestimonials).delete(controller.deleteTestimonials);

module.exports = router;