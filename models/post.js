const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    user: { type: String, required: true },
    figure: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", Post);
