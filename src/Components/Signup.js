import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authprovider } from "../Context/Context";
import Swal from 'sweetalert2';

const Signup = () => {
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider()
  const {createUser,profile,googleLogIn,githubLogin,verify} = useContext(Authprovider);
  const navigate = useNavigate()
  const [error,setError] = useState(null);
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if(password.length < 6){
      return
    }
    if(password !== confirm){
      setError('Your password did not match')
    }else(setError(''))

    createUser(email,password)
    .then(()=>{
      verify().then(()=>{
        Swal.fire(
          'Verify!',
          'A verification email has been sent to your account',
          'please verify!!'
        )
      })
      navigate('/course')
      profile(name,photoURL)
    }).catch(error => setError(error.message))
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
    <div className="container mx-auto" data-aos="zoom-out-left" data-aos-duration="1000">
      <div className="mx-2 md:w-[30%] md:mx-auto border-2 border-fuchsia-600 p-8 rounded-md shadow-lg mt-5">
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
            name="confirm"
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
            <Link className="text-primary" to='/login'>Login</Link>
        </div>
        <p className="text-red-800 my-2">{error}</p>
        <div>
          <button className="btn bg-emerald-700 w-full mt-5">Sign Up</button>
        </div>
        <div>
          <button onClick={handleGoogle} className="btn w-full mt-5">Sign in with Google</button>
          <button onClick={handleGithub} className="btn w-full mt-5">Sign in with Github</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
