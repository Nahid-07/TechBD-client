import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Courses";
import Home from "../Components/Home";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path:'/',element:<Layout></Layout>,children:[
            {
                path:'/', element:<Home></Home>
            },
            {
                path:'/courses' , element:<Courses></Courses>
            }
        ]
    }
])