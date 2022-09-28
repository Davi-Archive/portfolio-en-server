const express = require('express');
const router = express.Router();

const controller = require('../controller')

router.route("/").get(controller.getAbout).post(controller.postAbout);

router.route("/:id").put(controller.putAbout).delete(controller.deleteAbout);


module.exports = router;