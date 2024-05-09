import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3009/api/v1/post/")
    //   .then((res) => res.json())
    //   .then((date) => setPopularBlogs(date.slice(0, 15)));

    function fetchBlogs() {
      axios
        .get(`http://localhost:3009/api/v1/post/`)
        .then((response) => {
          const data = response.data.data;
          setPopularBlogs(data.slice(0, 15));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    fetchBlogs();
  });
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="text-base hover:text-orange-500 inline-flex items-center py-1 pb-4"
              >
                Read more
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* popular blogs */}
      <div>
        <h3 className="text-2xl font-semibold px-4 mt-8">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to="/"
                className="text-base hover:text-orange-500 inline-flex items-center py-1 pb-4"
              >
                Read more
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
