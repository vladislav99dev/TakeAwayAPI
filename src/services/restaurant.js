const Restaurant = require("../models/Restaurant");

const getAllRestaurants = () => {
    try {
        const restaurants = Restaurant.find();
        return restaurants;
    } catch (error) {
        console.log(error);
    }
}
const getOneRestaurant = () => {
    try {
        const restaurant = Restaurant.findByOne();
        return restaurant;
    } catch (error) {
        console.log(error);
    }
}
const createNewRestaurant = () => {
    try {
        const restaurant = Restaurant.create();
        return restaurant;
    } catch (error) {
        console.log(error);
    }
}
const updateOneRestaurant = () => {
    try {
        const restaurant = Restaurant.findOneAndUpdate();
        return restaurant;
    } catch (error) {
        console.log(error);
    }
}
const deleteOneRestaurant = () => {
    try {
        Restaurant.deleteOne();
        return;
    } catch (error) {
        console.log(error);
    }
}

const services = {
    getAllRestaurants,
    getOneRestaurant,
    createNewRestaurant,
    updateOneRestaurant,
    deleteOneRestaurant
}

module.exports = services;