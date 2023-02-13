const db = require("../db");
const Figure = require("../models/figure");

//this part connects to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const figures = [];

  await Figure.insertMany(figures);
  console.log("Titan touchdown, captain.");
};
const run = async () => {
  await main();
  db.close();
};

run();
