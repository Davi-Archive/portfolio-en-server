const express = require('express');
const router = express.Router()

const controller = require('../controller')

router
  .route("/")
  .get(controller.getExperiences)
  .post(controller.postExperiences);

router
  .route("/:id")
  .put(controller.putExperiences)
  .delete(controller.deleteExperiences);
  
module.exports = router;