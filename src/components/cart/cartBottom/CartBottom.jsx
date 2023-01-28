import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTotalAmount} from "../../../hooks/useProductInCart";
import CartAmount from "../cartAmount/CartAmount";
import {setPurchaseVisible} from "../../../store/toolKitRedux/modalsSlice";

const CartBottom = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const loadingStatus = useSelector(state => state.cart.status)
    const totalAmount = useTotalAmount(cartItems)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (loadingStatus === 'idle') {
            dispatch(setPurchaseVisible(true))
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