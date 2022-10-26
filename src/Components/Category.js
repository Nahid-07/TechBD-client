import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const {name,id} = category
  return (
    <div className="border-b-2 border-white py-5 text-center text-white font-medium text-xl">
        <Link to={`/details/${id}`}>{name}</Link>
    </div>
  );
};

export default Category;
