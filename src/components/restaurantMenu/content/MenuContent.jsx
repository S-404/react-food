import React from 'react';
import RestaurantCard from "../../restaurantCard/RestaurantCard";
import RestaurantOffer from "../../restaurantOffer/RestaurantOffer";
import MenuByCategoriesList from "./MenuByCategoriesList";
import Modal from "../../UI/modal/Modal";
import ProductInfo from "../../productInfo/ProductInfo";
import {setProductInfoVisible} from "../../../store/toolKitRedux/modalsSlice";
import {useDispatch, useSelector} from "react-redux";

const MenuContent = () => {
    const productInfoVisibility = useSelector(state => state.modals.productInfo)
    const dispatch = useDispatch()
    const setProductInfoVisibility = (value) => {
        dispatch(setProductInfoVisible(value))
    }

    return (
        <div>
            <RestaurantCard/>
            <RestaurantOffer/>
            <MenuByCategoriesList/>
            <Modal
                children={<ProductInfo/>}
                setVisible={setProductInfoVisibility}
                title={'Description'}
                visible={productInfoVisibility}
            />
        </div>
    );
};

export default MenuContent;