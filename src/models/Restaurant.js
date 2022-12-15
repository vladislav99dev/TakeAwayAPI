const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
