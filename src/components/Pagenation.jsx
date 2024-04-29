import React from "react";

const Pagenation = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  console.log(8, totalPages);
  const renderpaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pagenumber) => (
        <li
          className={pagenumber === currentPage ? "activePagenation" : ""}
          key={pagenumber}
        >
          <a href="#" onClick={() => onPageChange(pagenumber)}>
            {pagenumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className="pagenation my-8 flex-wrap gap-4">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          previous
        </button>
      </li>
      <div className="flex gap-1 mt-4">{renderpaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagenation;
