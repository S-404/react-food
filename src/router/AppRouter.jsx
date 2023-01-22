import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Restaurants from "../pages/Restaurants";
import Restaurant from "../pages/Restaurant";

const AppRouter = () => {

    const router = createBrowserRouter([
        {path: '/r/list', element: <Restaurants/>},
        {path: '/r/menu', element: <Restaurant/>},
        {path: '/r/*',element: <Restaurants/>}

    ])

    return <RouterProvider router={router}/>

};

export default AppRouter;