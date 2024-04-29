import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blogcards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlos = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log("filteredBlos" + filteredBlos.length);
  if (!Array.isArray(blogs)) {
    return <div>No blogs to display</div>;
  }
  console.log(JSON.stringify(filteredBlos));

  return (
    <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlos.map((blog) => (
        <Link
          to={`/blogs/${blog.id}`}
          key={blog.id}
          className="p-5 shadow-lg rounded cursor-pointer"
        >
          <div>
            <img src={blog.image} className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className=" inline-flex items-center mr-2" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-500">
            Published:{blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Blogcards;