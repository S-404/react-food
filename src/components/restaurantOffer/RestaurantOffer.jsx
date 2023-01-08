import React, {useEffect} from 'react';
import './restaurantOffer.scss'
import {useDispatch, useSelector} from "react-redux";
import {useFetching} from "../../hooks/useFetching";
import RestaurantService from "../../api/services/RestaurantService";
import {setOffer} from "../../store/toolKitRedux/restaurantSlice";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const RestaurantOffer = () => {
    const offer = useSelector(state => state.restaurant.offer)
    const selectedRestaurantId = useSelector(state => state.restaurant.selectedRestaurantId)
    const dispatch = useDispatch()
    const [fetchOffer] = useFetching(
        async () => {
            const responseData = await RestaurantService.getRestaurantOffer(selectedRestaurantId)
            dispatch(setOffer(responseData))
        }
    )
    useEffect(() => {
        async function fetchData() {
            await fetchOffer()
        }

        fetchData()
    }, [])

    if (!offer.name) return null

    return (
        <div className='restaurantOffer'>
            <div className='restaurantOffer__icon'>
                <AutoAwesomeIcon/>
            </div>
            <div className='restaurantOffer__message'>
                <div className='restaurantOffer__header'>{offer.name}</div>
                <div className='restaurantOffer__description'>{offer.description}</div>
            </div>

        </div>
    );
};

export default RestaurantOffer;