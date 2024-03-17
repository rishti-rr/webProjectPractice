/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import NotFound from "../Pages/Static/NotFound";
import AllProducts from "../Pages/Products/AllProducts";
import SignUp from "../Pages/Login/SignUp";
import Login from "../Pages/Login/Login";

 const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/homepage",
                element: <Homepage></Homepage>
            },
            {
                path: "products/all",
                element: <AllProducts></AllProducts>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
    {
        path: "signup",
        element: <SignUp></SignUp>
    },
    {
        path: "login",
        element: <Login></Login>
    }
 ])
 
 export default MainRoutes;