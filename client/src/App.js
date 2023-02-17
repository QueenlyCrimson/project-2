import "./styles/App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import FiguresPage from "./pages/FiguresPage";
import FigureFormCreate from "./components/FigureFormCreate";
import PostFormCreate from "./components/PostFormCreate";

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

  let figures = [];

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/figures" element={<FiguresPage />} />
          <Route path="/FigureFormCreate" element={<FigureFormCreate />} />
          <Route path="/create" element={<PostFormCreate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
