import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-2 md:w-1/2 md:mx-auto border-2 border-fuchsia-600 p-8 rounded-md shadow-lg mt-24">
        <div className="mb-4">
          <label className="block"> Your full name</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div>
          <label className="block">Your email address</label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div>
          <label className="block">Password</label>
          <input
            type="Password"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className="flex justify-between">
            <p><small>Allready have an account ?</small></p>
            <Link to='/login'><small>Login</small></Link>
        </div>
        <div>
          <button className="btn btn-secondary w-full mt-5">Sign Up</button>
        </div>
        <div>
          <button className="btn w-full mt-5">Google</button>
          <button className="btn w-full mt-5">Github</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
