const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  },
  type: {
    type: String,
    enum: ["Pizza", "Sushi", "Grill", "Sweets", "Fish", "Burger"],
    required: true,
  },
  foods: {
    type: Array,
  },
  deliveryCost: {
    type: String,
  },
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
