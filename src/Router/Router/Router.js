import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Shared/Category/Category";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import FQA from "../FQA/FQA";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/fqa',
                element: <FQA></FQA>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);