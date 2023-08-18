const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./models/Fruits.js");
const vegetables = require("./models/Veggies.js");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/vegetables", function (req, res) {
    res.render("vegetables/Index", { vegetables: vegetables });
});

app.get("/vegetables/:index", function (req, res) {
    res.render("vegetables/Show", {
        vegetable: vegetables[req.params.index],
    });
});

app.get("/fruits", function (req, res) {
    res.render("fruits/Index", { fruits: fruits });
});

app.get("/fruits/:index", function (req, res) {
    res.render("fruits/Show", {
        fruit: fruits[req.params.index],
    });
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
