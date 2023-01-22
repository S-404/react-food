import React, {useEffect} from 'react';
import RestaurantsList from "../components/restaurantsList/RestaurantsList";
import {setList} from "../store/toolKitRedux/restaurantSlice";
import RestaurantService from "../api/services/RestaurantService";
import {useDispatch} from "react-redux";
import {useFetching} from "../hooks/useFetching";

const Restaurants = () => {
    const dispatch = useDispatch()

    const [fetchRestaurantList, isFetching] = useFetching(async () => {
        const list = await RestaurantService.getRestaurantList()
        dispatch(setList(list))
    })
    useEffect(() => {
        async function fetchData() {
            await fetchRestaurantList()
        }

        fetchData()
    }, [])

    if (isFetching) return <div>Loading..</div>
    return (
        <div>
            <RestaurantsList/>
        </div>
    );
};

export default Restaurants;