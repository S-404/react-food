import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useFetching} from "../../hooks/useFetching";
import {setMenu} from "../../store/toolKitRedux/restaurantSlice";
import MenuCategories from "./categories/MenuCategories";
import RestaurantService from "../../api/services/RestaurantService";
import './restaurantMenu.scss'
import MenuContent from "./content/MenuContent";


const RestaurantMenu = () => {

    const dispatch = useDispatch()
    const [fetchMenu, isFetchMenuLoading] = useFetching(
        async () => {
            const responseData = await RestaurantService.getRestaurantMenu()
            dispatch(setMenu(responseData))
        }
    )
    useEffect(() => {
        async function fetchData() {
            await fetchMenu()
        }

        fetchData()
    }, [])

    if (isFetchMenuLoading) return <div>loading...</div>

    return (
        <div className='RestaurantMenu'>
            <div className='RestaurantMenu__leftMenu'>
                <MenuCategories/>
            </div>
            <div className='RestaurantMenu__content'>
                <MenuContent/>
            </div>
            <div className='RestaurantMenu__cart'>
                cart
            </div>

        </div>
    );
};

export default RestaurantMenu;