import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-14 grid grid-cols-1 px-2' >
            <div className='shadow-xl bg-slate-300 pt-4' data-aos="flip-down">
                <h1 className='text-4xl font-semibold text-center mb-5 text-gray-700'>What is cors ?</h1>
                <p className='text-xl bg-slate-100 p-3'>
                Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes.
                </p>
            </div>
            <div className='shadow-xl bg-slate-300 pt-4 my-5' data-aos="flip-down">
                <h1 className='text-4xl font-semibold text-center mb-5 text-gray-700'>Why are you using firebase?</h1>
                <p className='text-xl bg-slate-100 p-3'>
                    Firebase is from google services. So basically firebase is a way to secure your website.It has many more authentication system. for this service we can easily build up our authentication system for our websites.we can log in via Google account.facebook account,email and phone number,github,twitter ans many more.
                </p>
                <div className='shadow-xl bg-slate-300 pt-4' data-aos="flip-down">
                <h1 className='text-3xl font-semibold text-center mb-5 text-gray-700'>What other options do you have to implement authentication?</h1>
                <p className='text-xl bg-slate-100 p-3'>
                    So we have many alternative option to athenticatio.
                    <ol>
                        <li>MongoDB</li>
                        <li>Passport</li>
                        <li>Okta.</li>
                        <li>JSON Web Token.</li>
                        <li>Amazon Cognito.</li>
                    </ol>
                </p>
            </div>
            </div>
            <div className='shadow-xl bg-slate-300 pt-4' data-aos="flip-down">
                <h1 className='text-4xl font-semibold text-center mb-5 text-gray-700'>How does the private route work?</h1>
                <p className='text-xl bg-slate-100 p-3'>
                Privet router works like a watchman.Like if you have permission to enter then you can enter a place or route.This way privet router work.Suppose You want to enter a priver option in a website.When you are trying to enter the system will redirect to the privet route like Log in page or signup page.or some where else.it depends on the demand.
                </p>
            </div>
            <div className='shadow-xl bg-slate-300 pt-4 my-5' data-aos="flip-down">
                <h1 className='text-4xl font-semibold text-center mb-5 text-gray-700'>What is Node?</h1>
                <p className='text-xl bg-slate-100 p-3'>
                A Node is a data structure that stores a value that can be of any data type and has a pointer to another node. The implementation of a Node class in a programming language such as Python, should have methods to get the value that is stored in the Node, to get the next node, and to set a link to the next node.
                </p>
                <div className='shadow-xl bg-slate-400 pt-4'>
                <h1 className='text-3xl font-semibold text-center mb-5 text-gray-700'>How does Node work?</h1>
                <p className='text-xl bg-slate-100 p-3'>
                Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                </p>
            </div>
            </div>
        </div>
    );
};

export default Blog;