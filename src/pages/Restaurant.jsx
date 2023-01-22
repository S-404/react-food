import React, {useEffect} from 'react';
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import RestaurantService from "../api/services/RestaurantService";
import {useDispatch} from "react-redux";
import {useFetching} from "../hooks/useFetching";
import {useParams} from "react-router-dom";
import {setSelectedRestaurant} from "../store/toolKitRedux/restaurantSlice";

const Restaurant = () => {

    const dispatch = useDispatch()
    const params = useParams()

    const [fetchRestaurantMenu] = useFetching(async () => {
        const list = await RestaurantService.getRestaurantData(params.id)
        dispatch(setSelectedRestaurant(list))
    })
    useEffect(() => {
        async function fetchData() {
            await fetchRestaurantMenu()
        }

        fetchData()

    }, [params])

    return (
        <div>
            <DefaultLayout/>
        </div>
    );
};

export default Restaurant;