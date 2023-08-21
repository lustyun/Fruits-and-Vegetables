const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./models/Fruits.js");
const vegetables = require("./models/Veggies.js");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));


// Vegetables
app.get("/vegetables", function (req, res) {
    res.render("vegetables/Index", { vegetables: vegetables });
});

app.get("/vegetables/new", function (req, res) {
    res.render("vegetables/New");
});

app.post("/vegetables", (req, res) => {
    const culinaryUses = req.body.culinary_uses.split(",");
    req.body.culinary_uses = culinaryUses;
    vegetables.push(req.body);
    res.redirect("/vegetables");
});

app.get("/vegetables/:index", function (req, res) {
    res.render("vegetables/Show", {
        vegetable: vegetables[req.params.index],
    });
});


// Fruits
app.get("/fruits", function (req, res) {
    res.render("fruits/Index", { fruits: fruits });
});

app.get("/fruits/new", function (req, res) {
    res.render("fruits/New");
});

//create
app.post("/fruits", (req, res) => {
    console.log(req.body);
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect("/fruits");
});

app.get("/fruits/:index", function (req, res) {
    res.render("fruits/Show", {
        fruit: fruits[req.params.index],
    });
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
