import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoursesDemo = ({ demo }) => {
//   console.log(demo);
  const {thumbnail_url,title,published_date,author_name,id } =demo
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <figure>
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="font-medium text-2xl">Course by :{author_name} </h2>
        <p>Publish date :{published_date}</p>
        <div className="card-actions justify-between items-center">
            <p className="flex text-yellow-400"><FaStar /><FaStar /> <FaStar /> <FaStar /></p>
          <Link to={`/details/${id}`}><button className="btn bg-emerald-700">See more !</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesDemo;
