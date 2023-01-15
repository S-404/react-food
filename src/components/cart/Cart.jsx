import React from 'react';
import CartHeader from "./cartHeader/CartHeader";
import CartItems from "./cartItems/CartItems";
import CartBottom from "./cartBottom/CartBottom";
import './cart.scss'
const Cart = () => {

    return (
        <div className='cart'>
            <CartHeader/>
            <CartItems/>
            <CartBottom/>
        </div>
    );
};

export default Cart;