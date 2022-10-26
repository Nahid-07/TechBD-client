import React from 'react';
import { useContext } from 'react';
import { Authprovider } from '../Context/Context';


const CheckOut = () => {
    const {user} = useContext(Authprovider);
    console.log(user)
    return (
        <div className='text-center'>
            <h1 className=' text-6xl'>Congratulations !!!!!</h1>
            <h2 className='text-5xl mt-6'>{user.displayName}</h2>
            <img src={user.photoURL} alt=""  width='500px' className='ml-auto mr-auto w-[20%] mt-6'/>
        </div>
    );
};

export default CheckOut;