const express = require("express");
const router = express.Router();

const controller = require("../../controllers/restaurant");

router.get("/", controller.getAll);

router.get("/:rastaurantId", controller.getOne);

router.post("/", controller.createOne);

router.patch("/:restaurantId", controller.updateOne);

router.delete("/:restaurantId", controller.deleteOne);

module.exports = router;
