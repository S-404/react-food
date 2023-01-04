import React from 'react';
import CartMenu from "./CartMenu";
import './navCart.scss'
import Modal from "../../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setNavCartMenuVisible} from "../../../../store/toolKitRedux/modalsSlice";

const NavCart = () => {
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
                Cart
            </div>

            <Modal
                visible={navCartMenuVisibility}
                setVisible={setVisible}
                children={<CartMenu/>}
                title={'Cart:'}
            />
        </div>
    );
};

export default NavCart;