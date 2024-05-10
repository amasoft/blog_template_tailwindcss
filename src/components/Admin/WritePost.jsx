import React, { useState } from "react";
import axios from "axios";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      // Make POST request to your backend endpoint
      const response = await axios.post(
        "https://amatech-backend.onrender.com/api/v1/post/",
        {
          title,
          content,
          category,
          author,
        }
      );

      console.log("Post created:", response.data);
      // Handle success, maybe redirect user or show a success message
    } catch (error) {
      console.error("Error creating post:", error);
      // setError("An error occurred while creating the post. Please try again.");
    }

    // setIsLoading(false);

    console.log({ title, content, category });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="model-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[1000px] lg:h-[800px] rounded shadow-md">
          {/* model content */}
          <h2 className="text-xl font-semibold  mb-5 uppercase"> </h2>
          <form onSubmit={handleSubmit} className="px-6 mt-11 ">
            <div>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="post title"
                className="w-full rounded-md border mb-5 border-[#e0e0e0] bg-white py-6 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
              <input
                type="text"
                name="authorInput"
                id="authorInput"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-md border mb-5 border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
              />{" "}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full border-gray-300 py-6 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select a category...</option>
                  <option value="Technology">Technology</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Fashion">Fashion</option>
                </select>
              </div>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-40 resize-none"
                placeholder="Enter content..."
              />
            </div>
            <div>
              <button className="hover:shadow-md mt-4 rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none">
                Upload Post
              </button>
            </div>
          </form>
          {/* model close button */}
        </div>
      </div>
    </div>
  );
};

export default WritePost;
