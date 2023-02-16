import "./styles/App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import FiguresPage from "./pages/FiguresPage";
import FigureFormCreate from "./components/FigureFormCreate";

function App() {
  let posts = [
    {
      user: "QueenlyCrimson",
      figure: "MTRM-EX13 Lightning",
      title: "MakeToys Thundercracker!!",
      date: "January 12th, 2023",
      image:
        "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0309/users/1b73f26425c42baff4ad365372fca83cb4fcf9b2/i-img800x1200-1663506708qmjhwl298241.jpg",
      rating: 10,
      content:
        "This figure is fantastic! It has great feel and is really solid! It has ratcheting legs and the posability is simply amazing. It's perfect.",
    },
    {
      user: "QueenlyCrimson",
      figure: "MTRM-EX12 Skycrow",
      title: "MakeToys Skycrow!!!!",
      date: "January 12th, 2023",
      image: "https://i.ebayimg.com/images/g/FcAAAOSwWcpjbjNi/s-l500.jpg",
      rating: 10,
      content:
        "This figure is fantastic! It has great feel and is really solid! It has ratcheting legs and the posability is simply amazing. It's perfect.",
    },
    {
      user: "QueenlyCrimson",
      figure: "MP-49 Black Convoy",
      title: "NEMESIS PRIME IS HERE!!!!!!",
      date: "January 12th, 2023",
      image:
        "https://news.tfw2005.com/wp-content/uploads/sites/10/2020/07/Masterpiece-MP-49-Black-Convoy.jpeg",
      rating: 9,
      content:
        "The figure is breathtaking. It has so much presence and a really good feel. The only possible problem with it is the price point and the actual transformation. The transformation is fun yes but it takes quite a while. However everything else about this is really solid.",
    },
  ];

  let figures = [
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

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/figures" element={<FiguresPage figures={figures} />} />
          <Route path="/FigureFormCreate" element={<FigureFormCreate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
