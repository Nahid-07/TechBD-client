import React from 'react';
import { useContext } from 'react';
import { Authprovider } from '../Context/Context';
import ReactConfetti from 'react-confetti'
import { useState } from 'react';
import { useEffect } from 'react';


const CheckOut = () => {
    const {user} = useContext(Authprovider);
    const [windowDimensio,setDimention] = useState({width:window.innerWidth, height:window.innerHeight})
    const detectSize = ()=>{
        setDimention({width:window.innerWidth, height:window.innerHeight})
    }
    useEffect(()=>{
        window.addEventListener('resize', detectSize);
        return ()=>{
            window.removeEventListener('resize', detectSize)
        }
    },[windowDimensio])
    
    // console.log(user)
    return (
        <div className='container mx-auto'>
            <ReactConfetti 
                width={windowDimensio.width}
                height={windowDimensio.height}
                className="hidden md:block"
            />
            <div className='text-center'>
            <h1 className='text-3xl md:text-6xl text-yellow-400'>Congratulations !!!!!</h1>
            <h2 className='text-3xl md:text-5xl my-6 text-green-700'>{user.displayName}</h2>
            <p className='text-lg font-medium text-orange-800 mt-8'>You purchased our best course!!!</p>
            <img src={user.photoURL} alt=""  width='500px' className='ml-auto mr-auto w-[20%] mt-6 rounded-full'/>
        </div>
        </div>
    );
};

export default CheckOut;