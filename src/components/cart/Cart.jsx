import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    return (
        <div>
            {cartItems.map(item => (
                <CartItem
                    key={`cartItem_${item.id}`}
                    item={item}
                />
            ))}
        </div>
    );
};

export default Cart;