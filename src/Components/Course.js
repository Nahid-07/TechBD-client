import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name,id } = course;
  console.log(name);
  return (
    <div className="container mx-auto">
      <ul className="menu bg-base-100 w-56">
        <li className="border">
          <Link to={`/courses/${id}`}>{name}</Link>
        </li>
      </ul>
    </div>
  );
};
export default Course;
