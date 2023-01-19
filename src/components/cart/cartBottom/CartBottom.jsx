import React from 'react';
import {useSelector} from "react-redux";
import {useTotalAmount} from "../../../hooks/useProductInCart";
import CartAmount from "../cartAmount/CartAmount";

const CartBottom = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useTotalAmount(cartItems)


    if (!totalAmount) return null

    return (
        <div className='cart__cartBottom'>
            <span>{`К оплате `}<CartAmount/></span>

        </div>
    );
};

export default CartBottom;