import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
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
  // create user with email and password

  const createUser = (email, password) => {
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
    return signOut(auth);
  };
  // Sign in

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google log in
  const googleLogIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
// githib login
  const githubLogin =(provider)=>{
    signInWithPopup(auth,provider)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = { LogOut, createUser, profile, user, LogIn, googleLogIn , githubLogin};
  return (
    <div>
      <Authprovider.Provider value={authInfo}>{children}</Authprovider.Provider>
    </div>
  );
};

export default Context;
