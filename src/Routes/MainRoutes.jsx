import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
 const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    }
 ])
 
 export default MainRoutes;