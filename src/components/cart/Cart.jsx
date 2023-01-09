import React from 'react';
import {useSelector} from "react-redux";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <div>
            {cartItems.map(item => (
                <div key={`cartItem_${item.id}`}>{item.name}{item.cartItemQty}</div>
            ))}
        </div>
    );
};

export default Cart;