import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Courses from "../Components/Courses";
import Faq from "../Components/Faq";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path:'/',element:<Layout></Layout>,children:[
            {
                path:'/', element:<Home></Home>
            },
            {
                path:'/courses' , 
                element:<Courses></Courses>,
                loader: ()=>fetch('https://assignment-10-api-server.vercel.app/course-category'),
            },
            {
                path:'/courses/:id', element:<Courses></Courses>,
                loader:({params}) => fetch(`https://assignment-10-api-server-nahid-07.vercel.app/courses/${params.id}`)
            },
            {
                path:'/login', element:<Login></Login>
            },
            {
                path:'/signup', element:<Signup></Signup>
            },
            {
                path:'/blog', element:<Blog></Blog>
            },
            {
                path:'/faq', element:<Faq></Faq>
            },
        ]
    }
])