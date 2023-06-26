const db = require("../db");
const Figure = require("../models/figure");

//this part connects to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const figures = [
    {
      name: "MTRM-EX13 Lightning",
      description: `MTRM-EX13 Lightning stands approximately 10.0-inches tall in robot mode and scales to other figures from MakeToys and to other Masterpiece-scaled figures.  Make Toy's figures are fully convertable, offer a high attention to detail, and are made of high quality ABS plastic and some even include die-cast parts. `,
      class: `Commander`,
      brand: `MakeToy's`,
      releaseDate: "2022",
      price: 150,
      image:
        "https://www.thechosenprime.com/assets/images/3rd%20party/make%20toys/mtrm13%20lightning/mtrm13-lightning-02.jpg",
      reviews: [],
    },
    {
      name: "MTRM-13 Lightning",
      description: `MTRM-EX12 Skycrow stands approximately 10.0-inches tall in robot mode and scales to other figures from Make Toys and to other Masterpiece-scaled figures.  MakeToy's figures are fully convertable, offer a high attention to detail, and are made of high quality ABS plastic and some even include die-cast parts. `,
      class: `Commander`,
      brand: `MakeToy's`,
      releaseDate: "2022",
      price: 150,
      image:
        "https://bbts1.azureedge.net/images/p/full/2023/02/591eb757-9198-4574-a1c9-41f2d732b4fb.jpg",
      reviews: [],
    },
    {
      name: "MP-49 Black Convoy",
      description: `Here to battle against Optimus Prime is the Transformers Masterpiece MP-49 Black Convoy, also known as Nemesis Prime. Fitting perfectly into the Transformers Masterpiece lineup, Black Convoy is a highly detailed and poseable figure and can transform from robot to truck. Black Convoy includes several pieces of weaponry as well as a Matrix that can be removed from his chest.`,
      class: `Commander`,
      brand: `Takara Tomy`,
      releaseDate: "2020",
      price: 250,
      image:
        "https://s3.amazonaws.com/tfblog.images/2020/10/IMG_1839-1024x682.jpg",
      reviews: [],
    },
  ];

  await Figure.insertMany(figures);
  console.log("Titan touchdown, captain.");
};
const run = async () => {
  await main();
  db.close();
};

run();
