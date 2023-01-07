import React from 'react';
import RestaurantCard from "../../restaurantCard/RestaurantCard";
import RestaurantOffer from "../../restaurantOffer/RestaurantOffer";
import MenuByCategoriesList from "./MenuByCategoriesList";

const MenuContent = () => {

    return (
        <div>
            <RestaurantCard/>
            <RestaurantOffer/>
            <MenuByCategoriesList/>
        </div>
    );
};

export default MenuContent;