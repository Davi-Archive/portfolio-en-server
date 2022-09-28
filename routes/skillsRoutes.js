const express = require('express')
const router = express.Router();

const controller = require('../controller')

router.route("/").get(controller.getSkills).post(controller.postSkills);

router.route("/:id").put(controller.putSkills).delete(controller.deleteSkills);

module.exports = router