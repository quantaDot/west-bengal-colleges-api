const router = require("express").Router();
const universityController = require("../controllers/university-controller");

router.get("/", universityController.getAllUniversity);

module.exports = router;
