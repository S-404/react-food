import React from 'react';
import {useSelector} from "react-redux";
import {useTotalAmount} from "../../../hooks/useProductInCart";
import CartAmount from "../cartAmount/CartAmount";
import {useNavigate} from "react-router-dom";

const CartBottom = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const loadingStatus = useSelector(state => state.cart.status)
    const totalAmount = useTotalAmount(cartItems)
    const navigate = useNavigate();

    const onClickHandler = () => {
        if (loadingStatus === 'idle') {
            navigate(`/r/purchase`)
        }
    }

    if (!totalAmount) return null

    return (
        <div
            className={`cart__cartBottom ${loadingStatus === 'loading' ? 'cart__cartBottom_disabled' : ''}`}
            onClick={onClickHandler}
        >
            <span>{`К оплате `}<CartAmount/></span>
        </div>
    );
};

export default CartBottom;