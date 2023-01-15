import React from 'react';
import CartMenu from "./CartMenu";
import './navCart.scss'
import Modal from "../../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setNavCartMenuVisible} from "../../../../store/toolKitRedux/modalsSlice";
import {useTotalAmount} from "../../../../hooks/useProductInCart";
import useMatchMedia from "../../../../hooks/useMatchMedia";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavCart = () => {
    const matches800px = useMatchMedia(800)
    const storeCurrency = useSelector(state => state.restaurant.data?.currency)
    const navCartMenuVisibility = useSelector(state => state.modals.navCartMenu)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useTotalAmount(cartItems)
    const dispatch = useDispatch()
    const setVisible = (value) => {
        dispatch(setNavCartMenuVisible(value))
    }

    return (
        <div className='navCart'>
            <div
                className='navCart__button'
                onClick={() => setVisible(!navCartMenuVisibility)}
            >
                {matches800px?
                    <div><ShoppingCartIcon/></div>    :
                    <span>{'Корзина: '}</span>
                }
                <span>{`${totalAmount} ${storeCurrency}`}</span>
            </div>

            <Modal
                visible={navCartMenuVisibility}
                setVisible={setVisible}
                children={<CartMenu/>}
                title={''}
            />
        </div>
    );
};

export default NavCart;