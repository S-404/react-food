import React from 'react';
import CartMenu from "./CartMenu";
import './navCart.scss'
import Modal from "../../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setNavCartMenuVisible} from "../../../../store/toolKitRedux/modalsSlice";
import useMatchMedia from "../../../../hooks/useMatchMedia";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartAmount from "../../../cart/cartAmount/CartAmount";

const NavCart = () => {
    const matches800px = useMatchMedia(800)
    const navCartMenuVisibility = useSelector(state => state.modals.navCartMenu)

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
                {matches800px ?
                    <div><ShoppingCartIcon/></div> :
                    <span>{'Корзина: '}</span>
                }
                <CartAmount/>
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