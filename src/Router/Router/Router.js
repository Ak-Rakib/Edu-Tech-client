import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
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
                element: <Courses></Courses>
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