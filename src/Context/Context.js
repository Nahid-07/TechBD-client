import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config'
import { useState } from 'react';

export const Authprovider = createContext();
const auth = getAuth(app)
// create user with email and password
const Context = ({children}) => {
    const [user,setUser] = useState(null)
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
// Update profile
    const profile = (name,photoURL)=>{
        return updateProfile(auth.currentUser,{displayName: name, photoURL: photoURL})
    }

// log out 

    const LogOut = ()=>{
        return signOut(auth)
    }
// Sign in

    const LogIn = (email,password)=>{

        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=> unsubscribe()
    },[])
    const authInfo = {LogOut,createUser,profile,user,LogIn}
    return (
        <div>
            <Authprovider.Provider value={authInfo}>
                {children}
            </Authprovider.Provider>
        </div>
    );
};

export default Context;