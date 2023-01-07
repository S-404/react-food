import React from 'react';
import {useFilteredMenu} from "../../../hooks/restaurantMenu/useMenu";
import {useSelector} from "react-redux";

const MenuByCategories = ({category}) => {
    const menu = useSelector(state => state.restaurant.menu)
    const filteredMenu = useFilteredMenu(menu, 'category', category)

    if (!filteredMenu.length) return null

    return (
        <div>
            <h3>{category}</h3>
            <div>
                {filteredMenu.length}
            </div>

        </div>
    );
};

export default MenuByCategories;