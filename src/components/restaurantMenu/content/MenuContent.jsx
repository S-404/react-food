import React from 'react';
import RestaurantCard from "../../restaurantCard/RestaurantCard";
import RestaurantOffer from "../../restaurantOffer/RestaurantOffer";
import MenuByCategories from "./MenuByCategories";
import {useSelector} from "react-redux";
import {useMenuCategories} from "../../../hooks/restaurantMenu/useMenuCategories";

const MenuContent = () => {
    const menu = useSelector(state => state.restaurant.menu)
    const menuCategories = useMenuCategories(menu)
    return (
        <div>
            <RestaurantCard/>
            <RestaurantOffer/>
            {menuCategories.map(category => (
                <MenuByCategories
                    key={`MenuByCategory_category${category}`}
                    category={category}
                    menu={menu}
                />
            ))}

        </div>
    );
};

export default MenuContent;