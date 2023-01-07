import React, {useEffect, useRef} from 'react';
import ProductCard from "../../productCard/ProductCard";
import './menuByCategories.scss'
import {useFilteredMenu} from "../../../hooks/restaurantMenu/useMenu";
import {setMenuRef} from "../../../store/toolKitRedux/restaurantSlice";
import {useDispatch} from "react-redux";

const MenuByCategories = ({category, menu, popular}) => {

    const ref = useRef(null)

    const dispatch = useDispatch()
    const filteredMenu = useFilteredMenu(menu, 'category', category)
    const menuItems = category === 'Popular' ? popular : filteredMenu

    useEffect(()=>{
       if(ref)  dispatch(setMenuRef({name:category,ref:ref.current.id}))
    },[ref])

    if (!menuItems.length) return null

    return (
        <div
            ref={ref}
            className='menuByCategories'
            id={`menuByCategories_${category}`}
        >
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