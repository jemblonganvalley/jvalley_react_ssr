//import dependencies
const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();

//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

//setup template engine
app.set("views", "build");
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    defaultLayout: "main.html",
    layoutsDir: path.join(__dirname, "/build/layout"),
    extname: "html",
  })
);

app.get("/", (req, res) => {
  res.render("main", {
    og_description: "ini adalah react ssr pertama saya",
    og_title: "home page website saya",
  });
});

app.get("/about", (req, res) => {
  res.render("main", {
    og_description: "tentang website kami",
    og_title: "about page website saya",
    og_image: "https://picsum.photos/seed/150/200",
  });
});

app.listen(8000, () => {
  console.log("listen port 8000");
});
