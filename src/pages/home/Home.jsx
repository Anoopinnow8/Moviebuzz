import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "../home/trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
TopRated;
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;