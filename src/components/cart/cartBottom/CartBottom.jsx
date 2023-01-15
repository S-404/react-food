import React from 'react';
import {useSelector} from "react-redux";
import {useTotalAmount} from "../../../hooks/useProductInCart";

const CartBottom = () => {
    const storeCurrency = useSelector(state => state.restaurant.data?.currency)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useTotalAmount(cartItems)


    if (!totalAmount) return null

    return (
        <div className='cart__cartBottom'>
            {`К оплате ${totalAmount} ${storeCurrency}`}
        </div>
    );
};

export default CartBottom;