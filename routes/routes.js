const express = require("express");
const router = express.Router();

const allDetailsController = require("../controllers/getAllDrugs");

router.get("/drugList", allDetailsController.getDrugsList);

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Root endpoint, please use below endpoints",
    validEndpoints: ["/api/v1/drugList"],
  });
});

module.exports = router;
