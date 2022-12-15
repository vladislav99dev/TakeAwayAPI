const services = require("../services/restaurant");

const getAll = (req, res) => {
  const allRestaurants = services.getAllRestaurants();
  res.end("Get all");
};
const getOne = (req, res) => {
  const oneRestaurant = services.getOneRestaurant();
  res.end("Get one");
};
const createOne = (req, res) => {
  const newRestaurant = services.createNewRestaurant();
  res.end("Create one");
};
const updateOne = (req, res) => {
  const updatedRestaurant = services.updateOneRestaurant();
  res.end("Update one");
};
const deleteOne = (req, res) => {
  const deletedRestaurant = services.deleteOneRestaurant();
  res.end("Delete one");
};

const controller = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};

module.exports = controller;
