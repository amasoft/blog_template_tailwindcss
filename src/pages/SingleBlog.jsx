import React, { useState } from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";
import DOMPurify from "dompurify";

const SingleBlog = () => {
  const data = useLoaderData();
  // const [displayContent, setDisplayContent] = useState("");

  console.log(1, data);
  console.log(JSON.stringify(data));

  const {
    title,
    image,
    category,
    userName,
    published_date,
    reading_time,
    content,
  } = data.data;
  // setDisplayContent(content);
  const formattedDate = new Date(1715815855170);
  const newDate = formattedDate.toISOString().split("T")[0];

  console.log("formattedDate2>>>", newDate);
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl  text-center leading-snug font-bold mb-5">
          single blog page{" "}
        </h2>
      </div>
      {/* singl blog */}

      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row ">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={"image"} alt="" className="w-full mx-auto rounded" />
            <h2 className=" text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {title}
            </h2>
            <p className="mb-3 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {userName} | {newDate}
            </p>
            <p className="mb-3 text-gray-600">
              <FaClock className="inline-flex items-center mr-2" />
              {reading_time}
            </p>
            {/* <p className="text-base text-gray-500 mb-6">
              {DOMPurify.sanitize(content)}
              {dangerouslySetInnerHTML={{ __html: displayContent }}}
            </p> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
