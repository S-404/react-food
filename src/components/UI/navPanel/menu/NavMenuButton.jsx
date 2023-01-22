import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './navMenuButton.scss'
import useMatchMedia from "../../../../hooks/useMatchMedia";
import {useDispatch, useSelector} from "react-redux";
import {setNavMenuVisible} from "../../../../store/toolKitRedux/modalsSlice";
import Modal from "../../modal/Modal";
import CategoriesList from "../../../restaurantMenu/categories/categoriesList/CategoriesList";
import RestaurantsButton from "../../../restaurantMenu/restaurantsButton/RestaurantsButton";

const NavMenuButton = () => {
    const dispatch = useDispatch()
    const navMenuVisibility = useSelector(state => state.modals.navMenu)
    const matches800px = useMatchMedia(800)

    const onClickButtonHandler = (value) => {
        dispatch(setNavMenuVisible(value))
    }

    if (!matches800px) return null
    return (
        <div className='navMenu'>
            <div className='navMenu__navMenuButton'>
                <MenuIcon
                    onClick={() => onClickButtonHandler(true)}
                    fontSize='large'
                />
            </div>
            <Modal
                visible={navMenuVisibility}
                setVisible={onClickButtonHandler}
                title={'Меню'}
            >
                <div
                    className='navMenu__modalContent'
                    onClick={() => onClickButtonHandler(false)}
                >
                    <RestaurantsButton/>
                    <CategoriesList/>
                </div>

            </Modal>

        </div>


    );
};

export default NavMenuButton;