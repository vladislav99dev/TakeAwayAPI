const express = require("express");

const v1RestaurantRouter = require("./v1/routes/restaurant");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/restaurants", v1RestaurantRouter);

app.listen(PORT, () => {
  console.log(`Api is up and running on ${PORT}`);
});
