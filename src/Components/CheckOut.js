import React from 'react';
import { useContext } from 'react';
import { Authprovider } from '../Context/Context';


const CheckOut = () => {
    const {user} = useContext(Authprovider);
    
    // console.log(user)
    return (
        <div className='text-center'>
            <h1 className=' text-6xl'>Congratulations !!!!!</h1>
            <h2 className='text-5xl my-6 text-green-700'>{user.displayName}</h2>
            <p className='text-lg font-medium text-orange-800 mt-8'>You purchased our best course!!!</p>
            <img src={user.photoURL} alt=""  width='500px' className='ml-auto mr-auto w-[20%] mt-6 rounded-full'/>
        </div>
    );
};

export default CheckOut;