const services = require("../services/restaurant");

const getAll = (req, res) => {
  const allRestaurants = services.getAllRestaurants();
  res.end();
};
const getOne = (req, res) => {
  const oneRestaurant = services.getOneRestaurant();
  res.end();
};
const createOne = (req, res) => {
  const newRestaurant = services.createNewRestaurant();
  res.end();
};
const updateOne = (req, res) => {
  const updatedRestaurant = services.updateOneRestaurant();
  res.end();
};
const deleteOne = (req, res) => {
  const deletedRestaurant = services.deleteOneRestaurant();
  res.end();
};

const controller = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};

module.exports = controller;
