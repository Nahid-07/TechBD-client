import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { useContext } from "react";
import { Authprovider } from "../Context/Context";
import Footer from "./Footer";

const Details = () => {
  const detail = useLoaderData();
  const {user} = useContext(Authprovider)
  // console.log(user)
  const navigate = useNavigate()
  const handleSecure = ()=>{
    if(!user?.uid){
      navigate('/login')
    }
  }
  const { details, thumbnail_url, title, rating,price } = detail;
  const ref =useRef()
  return (
    <div className="container mx-auto my-5"  data-aos="flip-left">
      <ReactToPrint trigger={()=> <button className="bg-emerald-600 px-8 py-3 text-white font-medium text-xl mb-5">Download pdf</button>} content={()=> ref.current}>

      </ReactToPrint>
      
      <div ref={ref} className="card bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-around items-center">
            <span>{rating.number}</span><p className="flex text-yellow-400"><FaStar /><FaStar /> <FaStar /> <FaStar /></p>
          <p className="text-orange-500 text-3xl">Price : {price}</p>
          <Link to='/checkout'><button onClick={handleSecure} className="btn bg-emerald-700">Purchase now </button></Link>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
