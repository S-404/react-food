import React from 'react';
import CategoriesList from "./categoriesList/CategoriesList";
import './menuCategories.scss'
const MenuCategories = () => {

    return (
        <div className='menuCategories'>
            <h3 className='menuCategories__header'>{'Меню'}</h3>
            <div className='menuCategories__categoriesList'>
                <CategoriesList/>
            </div>
        </div>
    );
};

export default MenuCategories;