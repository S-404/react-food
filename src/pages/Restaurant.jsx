import React, {useEffect} from 'react';
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import {setData} from "../store/toolKitRedux/restaurantSlice";
import RestaurantService from "../api/services/RestaurantService";
import {useDispatch} from "react-redux";
import {useFetching} from "../hooks/useFetching";
import {useParams} from "react-router-dom";

const Restaurant = () => {

    const dispatch = useDispatch()
    const params = useParams()

    const [fetchRestaurantMenu] = useFetching(async () => {
        const list = await RestaurantService.getRestaurantData(params.id)
        dispatch(setData(list))
    })
    useEffect(() => {
        async function fetchData() {
            await fetchRestaurantMenu()
        }

        fetchData()
    }, [])

    return (
        <div>
            <DefaultLayout/>
        </div>
    );
};

export default Restaurant;