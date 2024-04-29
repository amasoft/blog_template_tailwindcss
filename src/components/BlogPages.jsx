import React, { useEffect, useState } from "react";
import Blogcards from "./Blogcards";
import Pagenation from "./Pagenation";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPages = () => {
  const [blogs, setBlogs] = useState([]);
  const pageSize = 12;
  const [currentPage, setCurrentpage] = useState(1);
  const [selectedCategory, setselectedcategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      console.log("patrick");
      //   let url = "http://localhost:5000/blogs";
      let url = `http://localhost:5000/blogs?pages=${currentPage}$limit=${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log("blog");
      console.log(response);
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);
  console.log(blogs);
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
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      {/* blogs  cards section*/}
      <div className="flex flex-col lg:flex-row gap-12">
        <Blogcards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
        {/* sidebar component */}
        <div>
          <SideBar />
        </div>
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
