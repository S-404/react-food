import React from 'react';
import Button from "../UI/buttons/button/Button";
import {addToCart} from "../../store/toolKitRedux/cartSlice";
import {useDispatch} from "react-redux";

const ProductAddButton = ({product}) => {
    const dispatch = useDispatch()
    const buttonClickHandler = () => {
        dispatch(addToCart(product))
    }
    return (
        <Button
            onClick={buttonClickHandler}
            text={'+ Добавить'}
        />
    );
};

export default ProductAddButton;