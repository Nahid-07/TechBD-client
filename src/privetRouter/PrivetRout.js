import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { Authprovider } from '../Context/Context';

const PrivetRout = ({children}) => {
    const {user,loading} = useContext(Authprovider)
    let location = useLocation()
    if(loading){
        return <progress className="progress w-full"></progress>
    }

    if(user){
        return children
    }
     return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivetRout;