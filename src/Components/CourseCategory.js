import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import CoursesDemo from './CoursesDemo';

const CourseCategory = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/course-category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    useEffect(()=>{
        fetch()
    },[])
    console.log(category)
    return (
        <div className='container mx-auto grid grid-cols-12 mt-10 gap-4'>
            <div className="col-span-2 bg-secondary">
                {
                    category.map(c => <Category key={c.id} category={c}></Category>)
                }
            </div>
            <div className='col-span-10'>
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