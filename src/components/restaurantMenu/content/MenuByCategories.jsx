import React from 'react';
import {useSelector} from "react-redux";
import {useFilteredMenu} from "../../../hooks/restaurantMenu/useMenu";
import ProductCard from "../../productCard/ProductCard";
import './menuByCategories.scss'
const MenuByCategories = ({category}) => {
    const menu = useSelector(state => state.restaurant.menu)
    const filteredMenu = useFilteredMenu(menu, 'category', category)

    if (!filteredMenu.length) return null

    return (
        <div className='menuByCategories'>
            <h3 className='menuByCategories__header'>{category}</h3>
            <div className='menuByCategories__productList'>
                {filteredMenu.slice(0,10).map(item=>(
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