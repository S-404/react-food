import React from 'react';
import {useSelector} from "react-redux";
import CategoriesListItem from "./CategoriesListItem";

const CategoriesList = () => {
    const menu = useSelector(state => state.restaurant.menu)
    return (
        <div className='categoriesList'>
            {menu.map(item => (
                <CategoriesListItem
                    key={`categoriesList_item_${item.name}`}
                    item={item.name}
                />
            ))}
        </div>
    );
};

export default CategoriesList;