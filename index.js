const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const collegeRouter = require("./routes/college-router");
const universityRouter = require("./routes/university-router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/colleges", collegeRouter);
app.use("/universities", universityRouter);

const server = app.listen(3000, () => {
  console.log("listening on port %s...", server.address().port);
});
