import React from "react";
import { Link } from "react-router-dom";
import hero2 from "../assests/hero2.jpg";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero2})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mb-5 text-4xl font-bold">If you want to achieve greatness stop asking for permission</h1>
      <p className="mb-5 text-xl">The world has become a log way now.The world jas become dependent on technology.Now is the best time to reivent your skill.so what are you waiting for?Join us today!! </p>
      <Link to='/course'><button className="btn bg-emerald-600">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-16 gap-6 my-10 text-center text-lg font-medium text-white " data-aos="zoom-in-down" data-aos-duration="500">
      <div className="bg-emerald-600 px-5 py-10 rounded">
      Once upon a time, the world of computer programming was a mysterious and exclusive place. Only a select handful of people were considered computer programmers with cutting-edge coding skills. Today, many IT jobs require a solid grasp of the top programming languages, and yes, we mean more than one.If your plans to advance your career or change careers completely requires you to master a programming language, you might wonder which one to learn. After all, it will take time and money to learn the language, so you want to make the right choice.
      </div>
      <div className="bg-emerald-600 px-5 py-10 rounded my-4">
      Once upon a time, the world of computer programming was a mysterious and exclusive place. Only a select handful of people were considered computer programmers with cutting-edge coding skills. Today, many IT jobs require a solid grasp of the top programming languages, and yes, we mean more than one.If your plans to advance your career or change careers completely requires you to master a programming language, you might wonder which one to learn. After all, it will take time and money to learn the language, so you want to make the right choice.
      </div>
      <div className="bg-emerald-600 px-5 py-10 rounded">
      Once upon a time, the world of computer programming was a mysterious and exclusive place. Only a select handful of people were considered computer programmers with cutting-edge coding skills. Today, many IT jobs require a solid grasp of the top programming languages, and yes, we mean more than one.If your plans to advance your career or change careers completely requires you to master a programming language, you might wonder which one to learn. After all, it will take time and money to learn the language, so you want to make the right choice.
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;
