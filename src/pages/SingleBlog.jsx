import React from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
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
            <img src={image} alt="" className="w-full mx-auto rounded" />
            <h2 className=" text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {title}
            </h2>
            <p className="mb-3 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {author} | {published_date}
            </p>
            <p className="mb-3 text-gray-600">
              <FaClock className="inline-flex items-center mr-2" />
              {reading_time}
            </p>
            <p className="text-base text-gray-500 mb-6">{content}</p>

            <div className="text-base text-gray-900 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci totam cupiditate accusantium incidunt magni aliquam
                nemo nobis, vel, ex sit magnam voluptatibus maxime aspernatur
                facere commodi earum, pariatur dignissimos fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci totam cupiditate accusantium incidunt magni aliquam
                nemo nobis, vel, ex sit magnam voluptatibus maxime aspernatur
                facere commodi earum, pariatur dignissimos fugiat.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci totam cupiditate accusantium incidunt magni aliquam
                nemo nobis, vel, ex sit magnam voluptatibus maxime aspernatur
                facere commodi earum, pariatur dignissimos fugiat.
              </p>
            </div>
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
