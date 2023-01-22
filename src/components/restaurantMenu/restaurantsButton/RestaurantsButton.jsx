import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './restaurantButton.scss'
const RestaurantsButton = () => {
    return (
        <div className='restaurantsButton'>
            <ArrowBackIosIcon/>
            {'К списку ресторанов'}
        </div>
    );
};

export default RestaurantsButton;