import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogPostForm = () => {
  const [userComment, setUserComment] = useState("");
  const [user, setUser] = useState("");
  const { id } = useParams(); // Example: URL like /posts/:id
  console.log(4, id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, userComment);
    try {
      //   // Make POST request to your backend endpoint
      const response = await axios.post(
        "http://localhost:3006/api/v1/comment/",
        {
          user,
          user_comment: userComment,
          post_id: id,
        }
      );

      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating comment:", error);
      // setError("An error occurred while creating the post. Please try again.");
    }
  };
  return (
    <div className="max-w-xl mx-auto mt-11 border-solid border-4 box-shadow border-indigo-600 px-4 mb-5">
      <h1 className="text-3xl font-bold mb-4">Add Comments</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="mt-1 block w-full py-6 px-2 font-medium text-base border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Name.."
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          ></label>
          <textarea
            id="content"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            className="mt-1 block w-full  rounded-md border border-gray-400  shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-40 resize-none"
            placeholder="Enter content..."
          />
        </div>
      </form>
      <button
        type="button"
        onClick={handleSubmit}
        className="inline-flex items-center px-4 py-4 mb-6 mt-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create Post
      </button>
    </div>
  );
};

export default BlogPostForm;
