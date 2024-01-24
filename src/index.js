//require("dotenv").config();

const express = require("express");
const path = require("path");
require("./db/conn");

const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

const User = require("./models/usermsg");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//setting the path
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

//middleware
app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(
  "/jq",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", async (req, res) => {
  try {
    // res.send(req.body);
    const userData = new User(req.body);
    await userData.save();
    res.status(201).render("index");
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(port, () => {
  console.log(`port is ${port}`);
});
