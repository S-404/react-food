import React from 'react';
import RestaurantMenu from "../restaurantMenu/RestaurantMenu";
import NavPanel from "../UI/navPanel/NavPanel";
import './defaultLayout.scss'

const DefaultLayout = () => {
    return (
        <div className='defaultLayout'>
            <div className='defaultLayout__header'>
                <NavPanel/>
            </div>
            <div className='defaultLayout__content'>
                <RestaurantMenu/>
            </div>

        </div>
    );
};

export default DefaultLayout;