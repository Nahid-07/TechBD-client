import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Authprovider } from "../Context/Context";

const Signup = () => {
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider()
  const {createUser,profile,googleLogIn,githubLogin} = useContext(Authprovider)
  const [error,setError] = useState();
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if(password.length < 6){
      return
    }
    createUser(email,password)
    .then((result)=>{
      const user = result.user;
      profile(name,photoURL)
      console.log(user)
    }).catch(err => console.log(err.messege))
  }
  const handleGoogle = ()=>{
    googleLogIn(provider).then(()=>{}).catch(err=>{
      console.log(err.messege);
    })
  }
  const handleGithub = ()=>{
    githubLogin(gitProvider).then(()=>{})
  }
  return (
    <div className="container mx-auto">
      <div className="mx-2 md:w-[30%] md:mx-auto border-2 border-fuchsia-600 p-8 rounded-md shadow-lg mt-24">
      <h1 className="text-5xl font-semibold text-center my-5">Please Sign up</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block"> Your full name</label>
          <input
            type="text"
            name = "name"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className="mb-4">
          <label className="block"> Your photoURL</label>
          <input
            type="text"
            name = "photoURL"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div>
          <label className="block">Your email address</label>
          <input
            type="email"
            name="email"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className="mt-4">
          <label className="block">Password</label>
          <input
            type="Password"
            name="password"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <div className="flex justify-between">
            <p><small>Allready have an account ?</small></p>
            <Link to='/login'>Login</Link>
        </div>
        <div>
          <button className="btn btn-secondary w-full mt-5">Sign Up</button>
        </div>
        <div>
          <button onClick={handleGoogle} className="btn w-full mt-5">Google</button>
          <button onClick={handleGithub} className="btn w-full mt-5">Github</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
