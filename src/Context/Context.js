import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const Authprovider = createContext();
const auth = getAuth(app);
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)
  // create user with email and password

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Update profile
  const profile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // log out

  const LogOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  // Sign in

  const LogIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google log in
  const googleLogIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };
// githib login
  const githubLogin =(provider)=>{
    setLoading(true)
    signInWithPopup(auth,provider)
  }
// varifcation eamil
  const verify = ()=>{
    return sendEmailVerification(auth.currentUser)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);
  const authInfo = { LogOut,verify,loading, createUser, profile, user, LogIn, googleLogIn , githubLogin};
  return (
    <div>
      <Authprovider.Provider value={authInfo}>{children}</Authprovider.Provider>
    </div>
  );
};

export default Context;
