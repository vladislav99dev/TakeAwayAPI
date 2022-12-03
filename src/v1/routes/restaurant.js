const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.send("Get all restaurant")
});

router.get("/:rastaurantId",(req,res) => {
    res.send("Get specific restaurant")
});

router.post("/",(req,res) => {
    res.send("Create new  restaurant")
});

router.patch("/:restaurantId", (req, res) => {
    res.send("Update an existing restaurant");
});

router.delete("/:restaurantId", (req, res) => {
    res.send("Delete an existing restaurant");
});

module.exports = router;