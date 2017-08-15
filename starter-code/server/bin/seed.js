var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipesDb");

var Ingredient = require("../models/ingredient.js");
var Dish = require("../models/dish.js");

var allIngredients = require("../../data/ingredients.json");

var allDishes = require("../../data/dishes.json");

Ingredient.insertMany(allIngredients, (error, docs) => {
  if (error) console.log(error);
  else console.log(docs.length + " Ingredients.insertMany success!");
});

Dish.insertMany(allDishes, (error, docs) => {
  if (error) console.log(error);
  else console.log(docs.length + " Dishes.insertMany success!");
});
