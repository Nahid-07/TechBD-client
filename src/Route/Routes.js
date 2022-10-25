import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Courses";
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
                loader: ()=>fetch('https://assignment-10-api-server.vercel.app/course-category')
            },
            {
                path:'/login', element:<Login></Login>
            },
            {
                path:'/signup', element:<Signup></Signup>
            },
        ]
    }
])