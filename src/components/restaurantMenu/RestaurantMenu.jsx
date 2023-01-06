import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import RestaurantService from "../../api/services/RestaurantService";

const RestaurantMenu = () => {
    const [menu, setMenu] = useState([])
    const [fetchMenu, isFetchMenuLoading] = useFetching(
        async () => {
            const responseData = await  RestaurantService.getRestaurantMenu()
            setMenu(responseData)
        }
    )
    useEffect(()=>{
        async function fetchData(){await fetchMenu()}
        fetchData()
    },[])
    if (isFetchMenuLoading) return <div>loading...</div>
    return (
        <div>
             {menu.length}
        </div>
    );
};

export default RestaurantMenu;