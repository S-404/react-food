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
            <div
                className="restaurantsButton__arrow"
            >
                <ArrowBackIosIcon/>
            </div>

            <span
                className="restaurantsButton__text"
            >
                {'К списку ресторанов'}
            </span>
        </div>
    );
};

export default RestaurantsButton;