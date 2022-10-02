const router = require("express").Router();
const collegeController = require("../controllers/college-controller");

router.get("/", collegeController.getAllColleges);

module.exports = router;
