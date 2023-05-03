import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Food from "../pages/Food/Food";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Recipe from "../components/Recipe/Recipe";
import Restaurant from "../components/Restaurant/Restaurant";
import Register from "../components/Register/Register";
import EmailPassword from "../components/EmailPassword/EmailPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/chef-data")
            },
            {
                path: 'recipe/:id',
                element: <Recipe></Recipe>,
                loader: () => fetch("http://localhost:5000/chef-data")
            },
            {
                path: 'foodError',
                element:<Food></Food>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/email-password',
                element: <EmailPassword></EmailPassword>
            }
        ]
    }
])

export default router;