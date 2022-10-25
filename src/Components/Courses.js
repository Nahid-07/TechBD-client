import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course'

const Courses = () => {
    const courses = useLoaderData();
    const details = useLoaderData()
    console.log(details)
    return (
        <div className='container mx-auto grid grid-cols-12 gap-5'>
            <div className='col-span-2'>
            {
                courses.map( course => <Course key={course.id} course={course}></Course>)
            }
        </div>
        <div className='col-span-10 border'>
            
        </div>
        </div>
    );
};

export default Courses;