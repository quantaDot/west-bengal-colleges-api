const readFile = require("../utils/read-file");

const universities = readFile("universities");

exports.getAllUniversity = (req, res, next) => {
  res.status(200).json({
    status: "success",
    results: universities.length,
    data: universities,
  });
};
