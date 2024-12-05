import React from "react";
import Banner from "../components/Banner";
import BlogPages from "../components/BlogPages";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <Carousel /> */}
      <div>
        <div className="max-w-7xl mx-auto mt-24">
          <BlogPages />
        </div>
      </div>
    </div>
  );
};

export default Home;
