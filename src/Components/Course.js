import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name } = course;
  console.log(name);
  return (
    <div className="container mx-auto">
      <ul className="menu bg-base-100 w-56">
        <li>
          <Link>{name}</Link>
        </li>
      </ul>
      <div>
        
      </div>
    </div>
  );
};

export default Course;
