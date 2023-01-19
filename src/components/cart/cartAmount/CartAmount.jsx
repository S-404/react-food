import React from 'react';
import {useSelector} from "react-redux";
import {useTotalAmount} from "../../../hooks/useProductInCart";

const CartAmount = () => {
    const storeCurrency = useSelector(state => state.restaurant.data?.currency || '')
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useTotalAmount(cartItems)

    return (
        <span>{`${totalAmount} ${storeCurrency}`}</span>
    );
};

export default CartAmount;