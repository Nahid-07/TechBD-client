import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Details = () => {
  const detail = useLoaderData();
  const { details, thumbnail_url, title, rating, author_name } = detail;
  console.log(detail);
  return (
    <div className="container mx-auto my-5">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-between items-center">
            <span>{rating.number}</span><p className="flex text-yellow-400"><FaStar /><FaStar /> <FaStar /> <FaStar /></p>
          <Link to='/checkout'><button className="btn btn-secondary">Purchase now </button></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
