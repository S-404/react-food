import React from 'react';
import Button from "../UI/buttons/button/Button";
import {addToCart} from "../../store/toolKitRedux/cartSlice";
import {useDispatch} from "react-redux";

const ProductAddButton = ({product,disabled}) => {
    const dispatch = useDispatch()
    const buttonClickHandler = () => {
        if(!disabled){
            dispatch(addToCart(product))
        }
    }
    return (
        <Button
            onClick={buttonClickHandler}
            text={'+ Добавить'}
            disabled={disabled}
        />
    );
};

export default ProductAddButton;