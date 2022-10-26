import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Faq from "../Components/Faq";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Layout from "../Layout/Layout";
import ErrorPage from '../Components/ErrorPage'
import CourseCategory from "../Components/CourseCategory";
import Details from "../Components/Details";
import CheckOut from "../Components/CheckOut";
import PrivetRout from "../privetRouter/PrivetRout";

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
            },
            {
                path : '/details/:id', element:<Details></Details>,
                loader: ({params}) => fetch(`https://assignment-10-api-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout', element:<PrivetRout><CheckOut></CheckOut></PrivetRout>,
                loader:()=> fetch('https://assignment-10-api-server.vercel.app/courses')
            }
        ]
    }
])