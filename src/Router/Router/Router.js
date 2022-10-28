import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import LogIn from "../../LogIn/LogIn";
import PrivateRouter from "../../PrivateRouter/PrivateRouter";
import Register from "../../Register/Register";
import Category from "../../Shared/Category/Category";
import AccessCourse from "../AccessCourse/AccessCourse";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import FQA from "../FQA/FQA";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://edu-tech-server-chi.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://edu-tech-server-chi.vercel.app/category/${params.id}`)
            },
            {
                path: '/fqa',
                element: <FQA></FQA>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/access',
                element: <PrivateRouter> <AccessCourse></AccessCourse> </PrivateRouter>
            },
            // {
            //     path:'*',
            //     element: 
            // }
        ]
    }
]);