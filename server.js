const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./db");
require("dotenv").config();
const app = express();
connect();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/"));

app.use("/question", require("./route/question"));
app.use("/user", require("./route/user"));
app.use("/admin", require("./route/admin"));
app.use("/admin/result", require("./route/result"));
app.use("/time", require("./route/timing"));

app.get("/quiz", (req, res) => {
  res.render("quiz");
});

app.get("/data", (req, res) => {
  res.render("userdetail");
});

app.get("/addquiz", (req, res) => {
  res.render("question.ejs");
});

app.get("/submitform", (req, res) => {
  res.render("UserSubmitForm.ejs");
});

app.get("/participants", (req, res) => {
  res.render("participant.ejs");
});

app.get("/instruction", (req, res) => {
  res.render("instruction");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT, process.env.IP , () => {
  console.log("server start at " + process.env.PORT);
});
