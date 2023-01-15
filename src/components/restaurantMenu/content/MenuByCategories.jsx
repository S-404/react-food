import React, {useEffect, useRef} from 'react';
import ProductCard from "../../productCard/ProductCard";
import './menuByCategories.scss'
import {setMenuRef} from "../../../store/toolKitRedux/restaurantSlice";
import {useDispatch} from "react-redux";
import useOnScreen from "../../../hooks/useOnScreen";

const MenuByCategories = ({category, menuItems}) => {

    const ref = useRef(null)
    const isVisible = useOnScreen(ref)
    const dispatch = useDispatch()

    useEffect(() => {
        if (ref) dispatch(setMenuRef({name: category, ref: ref.current}))
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
                {menuItems.map(item => (
                    <div
                        key={`filteredMenu_productCard_${item.id}`}
                        className='productList__productListItem'
                    >
                        <ProductCard
                            product={item}
                            isVisible={isVisible}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuByCategories;