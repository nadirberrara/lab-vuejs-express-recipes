var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Ingredient = require("../models/ingredient.js");
var Dish = require("../models/dish.js");
/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/api/hello", (req, res, next) => {
  res.json({ message: "hello" });
});

router.get("/api/dishes", (req, res, next) => {
  Dish.find().then(dishes => {
    res.json(dishes);
  });
});

router.get("/api/ingredients", (req, res, next) => {
  Ingredient.find().then(ingredients => {
    res.json(ingredients);
  });
});

router.get("/api/dishes/:id", (req, res, next) => {
  Dish.findById(req.params.id, function(err, dish) {
    if (err) res.json("dish not find");
    else res.json(dish);
  });
});

router.put("/api/dishes/:id", (req, res, next) => {
  Dish.findById(req.params.id, function(err, dish) {
    if (err) {
      res.json("dish not find");
    }
    dish.description = req.body.description;
    dish.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Well done, description updated !" });
    });
  });
});

module.exports = router;
