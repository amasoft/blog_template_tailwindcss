// ./src/Comments.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BASE_URL = "http://localhost:3009/";

const CommentWrite = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  console.log("paramas" + id);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/v1/comment/${id}`);
        setComments(response.data.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    console.log("comments>>>" + JSON.stringify(comments));

    fetchComments();
  }, []);

  return (
    <div className="container mx-auto mt-8 py-6">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded shadow">
            <p className="text-lg">{comment.user_comment}</p>
            <p className="text-sm text-gray-500">By {comment.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentWrite;
