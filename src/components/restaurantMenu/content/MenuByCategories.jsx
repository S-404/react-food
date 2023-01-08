import React, {useEffect, useRef} from 'react';
import ProductCard from "../../productCard/ProductCard";
import './menuByCategories.scss'
import {useFilteredMenu} from "../../../hooks/restaurantMenu/useMenu";
import {setMenuRef} from "../../../store/toolKitRedux/restaurantSlice";
import {useDispatch} from "react-redux";
import useOnScreen from "../../../hooks/useOnScreen";

const MenuByCategories = ({category, menu}) => {

    const ref = useRef(null)
    const isVisible = useOnScreen(ref)

    const dispatch = useDispatch()
    const menuItems = useFilteredMenu(menu, 'category', category)

    useEffect(() => {
        if (ref) dispatch(setMenuRef({name: category, ref: ref.current.id}))
    }, [ref])

    if (!menuItems.length) return null

    return (
        <div
            ref={ref}
            className='menuByCategories'
            id={`menuByCategories_${category}`}
        >
            <h3 className='menuByCategories__header'>{category}</h3>
            <div className='menuByCategories__productList'>
                {menuItems.slice(0, 10).map(item => (
                    <ProductCard
                        key={`filteredMenu_productCard_${item.id}`}
                        product={item}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuByCategories;