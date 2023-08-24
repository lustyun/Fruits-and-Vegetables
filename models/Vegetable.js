const mongoose = require("mongoose");

// Define the schema
const vegetableSchema = new mongoose.Schema({
    name: String,
    scientific_name: String,
    nutritional_highlights: String,
    culinary_uses: [String]
});

// Create the model
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

module.exports = Vegetable;
