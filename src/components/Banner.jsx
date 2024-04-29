import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black max-auto ">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl text-white text-center leading-snug font-bold mb-5">
          welcome to our blog
        </h1>
        <p className="text-gray-100 opacity-30 ">
          start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas we offer
          everythng yo need to get started fromm helpfull tips and tutorials
        </p>
        <div>
          <Link
            to="/"
            className="font-medium hover:text-orange-500 inline-flex items-center py-1"
          >
            learn more
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
