import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import CoursesDemo from './CoursesDemo';

const CourseCategory = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('https://assignment-10-api-server.vercel.app/course-category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    useEffect(()=>{
        fetch()
    },[])
    console.log(category)
    return (
        <div className='container mx-auto grid grid-cols-12 mt-10 gap-4'>
            <div className="md:col-span-2 bg-secondary mx-2">
                {
                    category.map(c => <Category key={c.id} category={c}></Category>)
                }
            </div>
            <div className='col-span-10 items-center'>
                <div className='grid grid-cols-3 gap-4'>
                {
                    category.map(c => <CoursesDemo key={c.id} demo={c}></CoursesDemo>)
                }
                </div>
            </div>
        </div>
    );
};

export default CourseCategory;