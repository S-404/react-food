import React from 'react';
import MenuByCategories from "./MenuByCategories";
import {useSelector} from "react-redux";
import {useMenuCategories} from "../../../hooks/restaurantMenu/useMenuCategories";

const MenuByCategoriesList = () => {
    const menu = useSelector(state => state.restaurant.menu)
    const menuCategories = useMenuCategories(menu)
    return (
        <div>
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

export default MenuByCategoriesList;