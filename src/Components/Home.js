import React from "react";
import { Link } from "react-router-dom";
import hero2 from '../assests/hero2.jpg'
const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${hero2})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to <span className="text-6xl text-secondary">CoderDream</span></h1>
          <p className="mb-5 text-lg font-medium">
          The world has come a long way now. The world has become dependent on technology. Now is the best time to reinvent yourself. So what are you waiting for? Join us today
          </p>
          <Link to='/course'><button className="btn btn-secondary">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
