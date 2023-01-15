import React from 'react';
import Button from "../../UI/buttons/button/Button";
import {useDispatch} from "react-redux";
import {clearCart} from "../../../store/toolKitRedux/cartSlice";

const CartHeader = () => {
    const dispatch = useDispatch()
    const headerButtonHandler = () => {
        dispatch(clearCart())
    }
    return (
        <div className='cart__cartHeader'>
            <h3 className='cartHeader__header'>{'Корзина'}</h3>
            <div className='cartHeader__headerButton'>
                <Button
                    onClick={headerButtonHandler}
                    text={'Очистить'}
                />
            </div>
        </div>
    );
};

export default CartHeader;