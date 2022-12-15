const express = require("express");
const db = require("./config/db");

require("dotenv").config({ path: ".env" });

const v1RestaurantRouter = require("./v1/routes/restaurant");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/restaurants", v1RestaurantRouter);

db(process.env.DB_CONNECTION_STRING)
  .then((response) => {
    app.listen(PORT, () => {
      console.log(`Api is up and running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
