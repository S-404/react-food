import React, {useEffect} from 'react';
import './restaurantCard.scss'
import {useDispatch, useSelector} from "react-redux";
import {useFetching} from "../../hooks/useFetching";
import RestaurantService from "../../api/services/RestaurantService";
import {setData} from "../../store/toolKitRedux/restaurantSlice";
import {Rating} from "@mui/material";

const RestaurantCard = () => {
    const selectedRestaurantId = useSelector(state => state.restaurant.selectedRestaurantId)
    const restaurantData = useSelector(state => state.restaurant.data)
    const dispatch = useDispatch()
    const [fetchRestaurantData] = useFetching(
        async () => {
            const responseData = await RestaurantService.getRestaurantData(selectedRestaurantId)
            dispatch(setData(responseData))
        }
    )
    useEffect(() => {
        async function fetch() {
            await fetchRestaurantData()
        }

        fetch()

    }, [])

    // if (isFetchingRestaurantData) return <div className='restaurantCard'>Loading...</div>

    if (!Object.keys(restaurantData).length) return <div className='restaurantCard'/>

    return (
        <div className='restaurantCard'>
            <img src={restaurantData.picture} alt={restaurantData.name}/>
            <div className='restaurantCard__infoLayout'>
                <div className='infoLayout__info'>
                    <div className='infoLayout__name'>
                        {restaurantData.name}
                    </div>
                    <Rating
                        readOnly
                        value={restaurantData.rating}
                    />
                    <div
                        className='infoLayout__description'
                    >
                        {restaurantData.description}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RestaurantCard;