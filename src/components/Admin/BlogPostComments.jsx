import React, { useState, useRef } from "react";

const CommentForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!author.trim() || !content.trim()) {
      alert("Please enter your name and a comment.");
      return;
    }

    onSubmit({ author, content });
    setAuthor("");
    setContent("");
    inputRef.current.focus(); // Focus back on input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <div className="flex items-center">
        <label htmlFor="author" className="w-1/5 text-sm font-medium">
          Name:
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          ref={inputRef}
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="content" className="w-1/5 text-sm font-medium">
          Comment:
        </label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={5}
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Comment
      </button>
    </form>
  );
};

const Comment = ({ author, content, timestamp }) => (
  <div className="mb-4 border-b border-gray-300 pb-4">
    <p className="text-base font-medium">{author}</p>
    <p className="text-gray-700">{content}</p>
    <p className="text-sm text-gray-500">
      {new Date(timestamp).toLocaleString()}
    </p>
  </div>
);

const CommentsList = ({ comments }) => (
  <div className="">
    {comments.map((comment) => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

const BlogPostComments = ({ comments, onSubmit }) => {
  return (
    <div className="mt-8">
      <h2>Comments</h2>
      <CommentForm onSubmit={onSubmit} />
      {/* <CommentsList comments={comments} /> */}
    </div>
  );
};

export default BlogPostComments;
