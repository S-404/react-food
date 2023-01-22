import React from 'react';
import {useSelector} from "react-redux";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import './restaurantList.scss'
import {useNavigate} from "react-router-dom";

const RestaurantsList = () => {
    const restaurantsList = useSelector(state => state.restaurant.list)
    const navigate = useNavigate();
    const itemClickHandler = (item) => {
        navigate(`/r/menu/${item.id}`)
    }
    return (
        <div className='restaurantList'>
            <h1 className='restaurantList__header'>
                {'Список ресторанов:'}
            </h1>
            {
                restaurantsList.map((item) => (
                    <div
                        className='restaurantList__item'
                        onClick={() => itemClickHandler(item)}
                        key={`restaurantList__item_${item.id}`}
                    >
                        <RestaurantCard
                            restaurantData={item}
                        />
                    </div>

                ))
            }


        </div>
    );
};

export default RestaurantsList;