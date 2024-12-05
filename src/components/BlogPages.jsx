import React, { useEffect, useState } from "react";
import Blogcards from "./Blogcards";
import Pagenation from "./Pagenation";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import axios from "axios";
import Widget from "./Widget";
import api from "../service/api.js";
const BlogPages = () => {
  const [blogs, setBlogs] = useState([]);
  const pageSize = 12;
  const [currentPage, setCurrentpage] = useState(1);
  const [selectedCategory, setselectedcategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    function fetchBlogs() {
      api
        .get(`/api/v1/post/`)
        .then((response) => {
          const data = response.data.data;
          setBlogs(data); // Assuming setBlogs updates state
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    fetchBlogs();
    // }, [currentPage, pageSize, selectedCategory]);
  }, [currentPage, pageSize, selectedCategory]);
  // console.log(blogs);
  // page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentpage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setselectedcategory(category);
    setCurrentpage(1);
    setActiveCategory(category);
  };
  return (
    <div>
      {/* category sectio */}
      {/* <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div> */}
      {/* blogs  cards section*/}
      <div className="flex flex-col lg:flex-row gap-12 mt-9">
        <Blogcards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />

        {/* <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget /> */}
        {/* sidebar component */}
        {/* <div>
          <SideBar />
        </div> */}
      </div>
      {/* pagenation */}
      <div>
        <Pagenation
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPages;
