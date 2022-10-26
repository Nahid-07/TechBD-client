import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layer from "../assests/Layer.png";
import { Authprovider } from "../Context/Context";
import Swal from 'sweetalert2'

const Login = () => {
  const [error, setError] = useState(null);
  const { LogIn } = useContext(Authprovider);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LogIn(email, password)
      .then(result => {
        const user = result.user;
        Swal.fire(
          'Successfully logged in!',
        )
        console.log(user)
      })
  };
  return (
    <div className="container mx-auto flex justify-around items-center mt-24">
      <div className="hidden md:block">
        <img src={Layer} alt="" width="600px" />
      </div>
      <div className="border p-8 rounded">
        <h1 className="text-5xl text-pink-500 font-semibold text-center my-5">
          Please Log in
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <p>
            <small>Forget password ?</small>
          </p>
          <div>
            <button className="btn btn-secondary w-full mt-5">Log in</button>
          </div>
          <div>
            <p>
              <small>do you have any account ?</small>
            </p>
            <p>{error}</p>
            <Link to="/signup">
              <button className="bg-slate-800 w-full text-white text-lg py-4 rounded">Sign up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
