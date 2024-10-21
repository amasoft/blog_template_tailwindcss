import React, { useEffect, useState } from "react";
import BlogPages from "../components/BlogPages";

const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl  text-center leading-snug font-bold mb-5">
          Blog Pages
        </h2>
      </div>
      <div>
        <BlogPages />
      </div>
       </div>
  );
};

export default Blogs;
