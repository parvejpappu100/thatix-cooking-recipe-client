import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Food from "../pages/Food/Food";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: 'food',
                element:<Food></Food>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;