import React from 'react';
import CartItem from "./CartItem";
import {useSelector} from "react-redux";

const CartItems = () => {
    const cartItems = useSelector(state => state.cart.cartItems)

    if(!cartItems.length) return (
        <div className='cart__emptyCartMessage'>
            {'В вашей корзине пусто.'}
        </div>
    )

    return (
        <div className='cart__cartItems'>
            {cartItems.map(item => (
                <CartItem
                    key={`cartItem_${item.id}`}
                    item={item}
                />
            ))}
        </div>
    );
};

export default CartItems;