import React from 'react';
import CartHeader from "./cartHeader/CartHeader";
import CartItems from "./cartItems/CartItems";
import CartBottom from "./cartBottom/CartBottom";
import './cart.scss'
import Modal from "../UI/modal/Modal";
import Purchase from "../purchase/Purchase";
import {useDispatch, useSelector} from "react-redux";
import {setPurchaseVisible} from "../../store/toolKitRedux/modalsSlice";

const Cart = () => {

    const purchaseVisibility = useSelector(state => state.modals.purchase)

    const dispatch = useDispatch()
    const setVisible = (value) => {
        dispatch(setPurchaseVisible(value))
    }


    return (
        <div className='cart'>
            <CartHeader/>
            <CartItems/>
            <CartBottom/>
            <Modal
                children={<Purchase/>}
                title={'Оплата заказа'}
                setVisible={setVisible}
                visible={purchaseVisibility}
            />
        </div>
    );
};

export default Cart;