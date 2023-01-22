import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Restaurants from "../pages/Restaurants";
import Restaurant from "../pages/Restaurant";
import RestaurantService from "../api/services/RestaurantService";
import {useDispatch} from "react-redux";
import {setList, setSelectedRestaurant} from "../store/toolKitRedux/restaurantSlice";

const AppRouter = () => {
    const dispatch = useDispatch()

    const router = createBrowserRouter([
        {
            path: 'r/list',
            element: <Restaurants/>,
            loader: async () => {
                return dispatch(setList(
                    await RestaurantService.getRestaurantList()
                ))
            }
        },
        {
            path: 'r/menu/:id/',
            element: <Restaurant/>,
            loader: async ({params}) => {
                return dispatch(setSelectedRestaurant(
                    await RestaurantService.getRestaurantData(params.id)
                ))
            },
            errorElement: <div>{'Такой страницы не найдено'}</div>,
        },
        {path: 'r/*', element: <Restaurants/>}

    ])

    return <RouterProvider router={router}/>

};

export default AppRouter;