const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Figure = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    class: { type: String, required: false },
    brand: { type: String, required: true },
    releaseDate: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Figure", Figure);
