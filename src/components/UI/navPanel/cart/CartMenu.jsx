import React from 'react';
import {useSelector} from "react-redux";

const CartMenu = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <div className='navCart__navCartMenu'>
            {cartItems.map(item=>(
                <div
                    key={`cartItem_${item.id}`}
                    className='navCartMenu__item'
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default CartMenu;