import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Faq from "../Components/Faq";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Layout from "../Layout/Layout";
import ErrorPage from '../Components/ErrorPage'
import CourseCategory from "../Components/CourseCategory";

export const router = createBrowserRouter([
    {
        path:'/',element:<Layout></Layout>,errorElement: <ErrorPage></ErrorPage>, children:[
            {
                path:'/', element:<Home></Home>
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
            {
                path:'/course', element:<CourseCategory></CourseCategory>
            }
        ]
    }
])