const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Figure = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    class: { type: String },
    brand: { type: String, required: true },
    releaseDate: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Figure", Figure);
