const express = require('express')
const router = express.Router()

const controller = require('../controller')

router.route("/").get(controller.getTestmonials).get(controller.postTestmonials);

router.route("/:id").put(controller.putTestmonials).delete(controller.deleteTestmonials);

module.exports = router;