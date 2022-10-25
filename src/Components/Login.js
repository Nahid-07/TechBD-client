import React from "react";
import { Link } from "react-router-dom";
import Layer from "../assests/Layer.png";

const Login = () => {
  return (
    <div className="container mx-auto flex justify-around items-center mt-24">
      <div className="hidden md:block">
        <img src={Layer} alt="" width="600px" />
      </div>
      <div className="border p-8 rounded">
      <h1 className="text-5xl text-pink-500 font-semibold text-center my-5">Please Log in</h1>
        <div className="mb-4">
        <label htmlFor=""> Your email</label>
        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <div>
            <label htmlFor=""> Password</label>
            <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <p><small>Forget password ?</small></p>
        <div>
        <button className="btn btn-secondary w-full mt-5">Log in</button>
        </div>
        <div className="flex justify-between">
            <p><small>do you have any account ?</small></p>
            <Link to='/signup'><small>Signup</small></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
