import React from 'react';
import ProductCard from "../../productCard/ProductCard";
import './menuByCategories.scss'
import {useFilteredMenu} from "../../../hooks/restaurantMenu/useMenu";

const MenuByCategories = ({category, menu, popular}) => {

    const filteredMenu = useFilteredMenu(menu,'category',category)
    const menuItems = category === 'Popular' ? popular : filteredMenu

    if (!menuItems.length) return null

    return (
        <div className='menuByCategories'>
            <h3 className='menuByCategories__header'>{category}</h3>
            <div className='menuByCategories__productList'>
                {menuItems.map(item => (
                    <ProductCard
                        key={`filteredMenu_productCard_${item.id}`}
                        product={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuByCategories;