const express = require("express");
const router = express.Router();

const controller = require("../controller");

router.route("/").get(controller.getWork).post(controller.postWork);

router.route("/:id").put(controller.putWork).delete(controller.deleteWork);

module.exports = router;