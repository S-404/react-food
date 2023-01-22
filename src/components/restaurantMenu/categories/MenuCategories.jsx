import React from 'react';
import CategoriesList from "./categoriesList/CategoriesList";
import './menuCategories.scss'
import RestaurantsButton from "../restaurantsButton/RestaurantsButton";
const MenuCategories = () => {

    return (
        <div className='menuCategories'>
            <div className='menuCategories__restaurantsButton'>
                <RestaurantsButton/>
            </div>
            <h3 className='menuCategories__header'>{'Меню'}</h3>
            <div className='menuCategories__categoriesList'>
                <CategoriesList/>
            </div>
        </div>
    );
};

export default MenuCategories;