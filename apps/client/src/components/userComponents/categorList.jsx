"use client";
import { CiCircleCheck } from "react-icons/ci";
import { useFilter } from "@app/client/data/filter";
import { useState } from "react";

function CategoryList({ categories }) {
  const addCategoryFilter = useFilter((state) => state.addCategoryFilter);
  const [rating, setRating] = useState([]);
  const [hover, setHover] = useState("");

  function handleClick(val) {
    addCategoryFilter(val);
    if (rating.some((data) => data === val)) {
      const newarr = rating.filter((data) => data !== val);
      setRating(newarr);
    } else {
      const newarr = [...rating, val];
      setRating(newarr);
    }
  }

  const checkInside = (val) => {
    return rating.some((data) => data === val);
  };

  return (
    <div className="space-y-2">
      <h3 className="text-base   text-gray-800 mb-3 uppercase border-b-2  font-medium">
        Categories
      </h3>
      {categories.map((category) => (
        <div className="flex items-center py-1 border-b" key={category.id}>
          <label
            htmlFor={category.name}
            className="text-gray-600 ml-2 mr-3 cursor-pointer"
          >
            {category.name}
          </label>
          <CiCircleCheck
            key={category.id}
            className="cursor-pointer"
            size={20}
            color={
              category.id === hover || checkInside(category.id)
                ? "brown"
                : "black"
            }
            onMouseEnter={() => setHover(category.name)}
            onMouseLeave={() => setHover("")}
            onClick={() => handleClick(category.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
