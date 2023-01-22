import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFetching} from "../../hooks/useFetching";
import {setMenu} from "../../store/toolKitRedux/restaurantSlice";
import MenuCategories from "./categories/MenuCategories";
import RestaurantService from "../../api/services/RestaurantService";
import './restaurantMenu.scss'
import MenuContent from "./content/MenuContent";
import Cart from "../cart/Cart";


const RestaurantMenu = () => {
    const selectedRestaurantId = useSelector(state => state.restaurant.selectedRestaurantId)
    const dispatch = useDispatch()
    const [fetchMenu, isFetchMenuLoading] = useFetching(
        async () => {
            const responseData = await RestaurantService.getRestaurantMenu(selectedRestaurantId)
            dispatch(setMenu(responseData))
        }
    )
    useEffect(() => {
        async function fetchData() {
            await fetchMenu()
        }

        fetchData()
    }, [selectedRestaurantId])

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
                <Cart/>
            </div>

        </div>
    );
};

export default RestaurantMenu;