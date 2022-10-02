const readFile = require("../utils/read-file");

const colleges = readFile("colleges");

exports.getAllColleges = (req, res, next) => {
  res.status(200).json({
    status: "success",
    results: colleges.length,
    data: colleges,
  });
};
