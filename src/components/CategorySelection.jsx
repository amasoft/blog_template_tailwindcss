import React from "react";

const CategorySelection = ({
  onSelectCategory,
  selectedCategory,
  activeCategory,
}) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-500 font-semibold">
      <button
        //   to make the ALL selected by default
        onClick={() => onSelectCategory(null)}
        className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCategory === category ? " " : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
