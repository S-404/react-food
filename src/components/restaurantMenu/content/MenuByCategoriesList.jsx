import React from 'react';
import MenuByCategories from "./MenuByCategories";
import {useSelector} from "react-redux";

const MenuByCategoriesList = () => {
    const menu = useSelector(state => state.restaurant.menu)
    return (
        <div>
            {menu.map(category => (
                <MenuByCategories
                    key={`MenuByCategory_category${category.name}`}
                    category={category.name}
                    menuItems={category.items}
                />
            ))}
        </div>
    );
};

export default MenuByCategoriesList;