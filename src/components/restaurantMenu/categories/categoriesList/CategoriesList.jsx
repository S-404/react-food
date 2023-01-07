import React from 'react';
import {useSelector} from "react-redux";
import {useMenuCategories} from "../../../../hooks/restaurantMenu/useMenuCategories";
import CategoriesListItem from "./CategoriesListItem";

const CategoriesList = () => {
    const menu = useSelector(state => state.restaurant.menu)
    const menuCategories = useMenuCategories(menu)
    return (
        <div className='categoriesList'>
            {menuCategories.map(item => (
                <CategoriesListItem
                    key={`categoriesList_item_${item}`}
                    item={item}
                />
            ))}
        </div>
    );
};

export default CategoriesList;