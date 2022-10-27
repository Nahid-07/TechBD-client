import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from './Category';
import CoursesDemo from './CoursesDemo';
import Footer from './Footer';

const CourseCategory = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('https://assignment-10-api-server.vercel.app/course-category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    console.log(category)
    return (
        <div>
            <div className='container mx-auto lg:grid grid-cols-12 mt-10 gap-4'>
            <div className="md:col-span-2 bg-emerald-700 mx-2 mb-5">
                {
                    category.map(c => <Category key={c.id} category={c}></Category>)
                }
            </div>
            <div className='col-span-10'>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    category.map(c => <CoursesDemo key={c.id} demo={c}></CoursesDemo>)
                }
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CourseCategory;