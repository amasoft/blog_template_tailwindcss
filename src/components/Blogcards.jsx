import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blogcards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  // console.log("Blogcards");
  // console.log(JSON.stringify(blogs));
  const filteredBlos = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  // console.log("filteredBlos" + filteredBlos.length);
  if (!Array.isArray(blogs)) {
    return <div>No blogs to display</div>;
  }
  // console.log(5, JSON.stringify(filteredBlos));
  const timeAgoInMinutes = (timestamp) => {
    const now = Date.now(); // Get the current time in milliseconds
    const differenceInMillis = now - timestamp; // Calculate the difference

    const minutes = Math.floor(differenceInMillis / (1000 * 60));
    const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
    const days = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 7));
    const months = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 365));

    if (minutes < 1) {
      return "just now";
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (days < 7) {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (weeks < 5) {
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    } else if (months < 12) {
      return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
      return `${years} year${years !== 1 ? "s" : ""} ago`;
    }
  };

  const timestamp = 1715823959455;
  const minutesAgo = timeAgoInMinutes(timestamp);
  console.log("opo", `${minutesAgo}`);
  const sharedClasses = {
    card: "max-w-lg w-full bg-card shadow-lg rounded-lg overflow-hidden",
    textPrimary: "text-primary-foreground",
    textSecondary: "text-secondary-foreground",
    textMuted: "text-muted-foreground",
  };
  const text =
    " Description of the health tech blog post goes here. It should be informative and engaging to attract readers interested in health and technology.";
  return (
    <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlos.map((blog) => (
        // console.log('u',blog.id)
        <Link
          to={`/blogs/${blog._id}`}
          key={blog._id}
          className="p-5 shadow-lg rounded cursor-pointer"
        >
          {/* <div>
            <img src={blog.post_picture} alt="banner" className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className=" inline-flex items-center mr-2" />
            {blog.author.username}
          </p>
          <p className="text-sm text-gray-500">{`Published: ${timeAgoInMinutes(
            blog.published_date
          )}`}</p> */}

          {/* <div className={sharedClasses.card}> */}
          <img
            src={blog.post_picture}
            // src="data:image/jpeg;base64,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"
            alt="Health Tech Blog Post Image"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className={` font-bold mb-2 text-blue-300`}>{blog.title}</h1>
            <p className={`${sharedClasses.textSecondary} mb-4`}>
              {/* {blog.content.substring(0, text.lastIndexOf(" ", 79)) + "..."} */}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content.substring(0, text.lastIndexOf(" ", 79)) +
                    "...",
                }}
              ></div>
              {/* {blog.content.substring(0, text.lastIndexOf(" ", 79)) + "..."} */}
            </p>
            <div
              className={`flex items-center justify-between text-sm ${sharedClasses.textMuted}`}
            >
              <p>
                <FaUser className=" inline-flex items-center mr-2" />
                {blog.author.username}
              </p>
              <p>5 min read</p>
            </div>
          </div>
          {/* </div> */}
        </Link>
      ))}
    </div>
  );
};

export default Blogcards;
