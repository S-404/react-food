import React from 'react';
import Button from "../../UI/buttons/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../../store/toolKitRedux/cartSlice";

const CartHeader = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const headerButtonHandler = () => {
        dispatch(clearCart())
    }
    return (
        <div className='cart__cartHeader'>
            <h3 className='cartHeader__header'>{'Корзина'}</h3>
            <div className='cartHeader__headerButton'>
                {cartItems.length ?
                    <Button
                        onClick={headerButtonHandler}
                        text={'Очистить'}
                    />
                    : null}

            </div>
        </div>
    );
};

export default CartHeader;