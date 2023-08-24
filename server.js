const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./models/Fruits.js");
const vegetable = require("./models/Vegetable.js");
const mongoose = require("mongoose");
require("dotenv").config();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});


// Vegetables
app.get("/vegetables", async function (req, res) {
    try {
        const allVegetables = await vegetable.find({});
        res.render("vegetables/Index", {
            vegetables: allVegetables,
        });
    } catch (error) {
        console.error("Error finding vegetables:", error);
        // Handle the error appropriately
        res.status(500).send("Error fetching vegetables");
    }
});

app.get("/vegetables/new", function (req, res) {
    res.render("vegetables/New");
});

app.post("/vegetables", async (req, res) => {
    const culinaryUses = req.body.culinary_uses.split(",");
    req.body.culinary_uses = culinaryUses;

    try {
        const createdVegetable = await vegetable.create(req.body);
        console.log("New vegetable created:", createdVegetable);
        res.redirect("/vegetables");
    } catch (error) {
        console.error("Error creating vegetable:", error);
        // Handle the error appropriately
        res.status(500).send("Error creating vegetable"); // Sending an error response
    }
});

app.get("/vegetables/:index", async function (req, res) {
    try {
        const foundVeggie = await vegetable.findById(req.params.index);
        res.render("vegetables/Show", {
            vegetable: foundVeggie,
        });
    } catch (error) {
        console.error("Error finding vegetable:", error);
        // Handle the error appropriately
        res.status(404).send("Vegetable not found"); // Sending an error response
    }
});

// Fruits
app.get("/fruits", async (req, res) => {
    try {
        const allFruits = await fruits.find({});
        res.render("fruits/Index", {
            fruits: allFruits,
        });
    } catch (error) {
        console.error("Error finding fruits:", error);
        // Handle the error appropriately
        res.status(500).send("Error fetching fruits");
    }
});

app.get("/fruits/new", function (req, res) {
    res.render("fruits/New");
});

//create
app.post("/fruits", async (req, res) => {
    console.log("Request Body:", req.body);
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    try {
        const createdFruit = await fruits.create(req.body);
        console.log("New fruit created:", createdFruit);
        res.redirect("/fruits"); // Redirect to /fruits route
    } catch (error) {
        console.error("Error creating fruit:", error);
        // Handle the error appropriately
        res.status(500).send("Error creating fruit"); // Sending an error response
    }
});

app.get("/fruits/:index", async (req, res) => {
    try {
        const foundFruit = await fruits.findById(req.params.index);
        res.render("fruits/Show", {
            fruit: foundFruit,
        });
    } catch (error) {
        console.error("Error finding fruit:", error);
        // Handle the error appropriately
        res.status(404).send("Fruit not found"); // Sending an error response
    }
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
