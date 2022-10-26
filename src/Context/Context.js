import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config'

export const Authprovider = createContext();
const auth = getAuth(app)
// create user with email and password
const Context = ({children}) => {
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
// Update profile
    const profile = (name,photoURL)=>{
        return updateProfile(auth.currentUser,{displayName: name, photoURL: photoURL})
    }
    const authInfo = {createUser,profile}
    return (
        <div>
            <Authprovider.Provider value={authInfo}>
                {children}
            </Authprovider.Provider>
        </div>
    );
};

export default Context;