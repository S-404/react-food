import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './restaurantButton.scss'
import {useNavigate} from "react-router-dom";

const RestaurantsButton = () => {
    const navigate = useNavigate();
    const itemClickHandler = () => {
        navigate(`/r/list`)
    }
    return (
        <div
            className='restaurantsButton'
            onClick={itemClickHandler}
        >
            <ArrowBackIosIcon/>
            {'К списку ресторанов'}
        </div>
    );
};

export default RestaurantsButton;