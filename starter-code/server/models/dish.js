var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const DishSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  description: {
    type: String,
    required: [true, "description is required"]
  },
  image: String,
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: "Ingredient"
      },
      quantity: Number,
      _id: false
    }
  ]
});
module.exports = mongoose.model("Dish", DishSchema);
