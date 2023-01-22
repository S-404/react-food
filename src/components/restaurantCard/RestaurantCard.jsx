import React from 'react';
import './restaurantCard.scss'
import {Rating} from "@mui/material";

const RestaurantCard = ({restaurantData}) => {

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