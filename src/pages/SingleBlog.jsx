import React, { useState, useEffect } from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";
import DOMPurify from "dompurify";
import NoPost from "../components/Admin/NoPost";
import CommentsPost from "../components/Admin/CommentsPost";
import BlogPostForm from "../components/Admin/BlogPostForm";
import BlogPostComments from "../components/Admin/BlogPostComments";
import axios from "axios";
import CommentWrite from "../components/CommentWrite";

const SingleBlog = () => {
  const data = useLoaderData();
  // const [displayContent, setDisplayContent] = useState("");
  var postId = "664744a2d2aa440378cec43b";

  const {
    title,
    post_picture,
    category,
    userName,
    published_date,
    reading_time,
    content,
  } = data.data;
  // setDisplayContent(content);
  const formattedDate = new Date(parseInt(published_date));
  const newDate = formattedDate.toISOString().split("T")[0];

  console.log("arinxe>>>>>>" + post_picture);
  if (!data.length > 0) {
    console.log("amadi,>>");
  }
  return (
    <div>
      {/* <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl  text-center leading-snug font-bold mb-5">
          single blog page{" "}
        </h2>
      </div> */}
      {/* singl blog */}

      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row mt-28 ">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <h2 className=" text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {title}
            </h2>
            <img src={post_picture} alt="" className="w-full mx-auto rounded" />
            <div className="flex justify-between items-center mb-3 text-gray-600 mt-4">
              <div className="flex items-center">
                <FaUser className="inline-flex items-center mr-2" />
                <span>
                  {userName} | {newDate}
                </span>
              </div>
              <div className="flex items-center">
                <FaClock className="inline-flex items-center mr-2" />
                <span>{reading_time}</span>
              </div>
            </div>

            {/* <p className="text-base text-gray-500 mb-6">
              {DOMPurify.sanitize(content)}
              {dangerouslySetInnerHTML={{ __html: displayContent }}}
            </p> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          {/* <BlogPostForm />

          <CommentWrite /> */}
        </div>
        <div className="lg:w-1/2">{/* <SideBar /> */}</div>
      </div>
      {/* <BlogPostForm /> */}
      {/* <CommentWrite /> */}
    </div>
  );
};

export default SingleBlog;
