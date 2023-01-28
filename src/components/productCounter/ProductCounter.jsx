import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../store/toolKitRedux/cartSlice";
import Counter from "../UI/counter/Counter";

const ProductCounter = ({product, disabled}) => {

    const dispatch = useDispatch()

    const increment = () => {
        if(!disabled){
            dispatch(addToCart(product))
        }
    }
    const decrement = () => {
        if(!disabled){
            dispatch(removeFromCart(product))
        }
    }

    return (
        <div>
            <Counter
                value={product.cartItemQty}
                increment={increment}
                decrement={decrement}
                disabled={disabled}
            />
        </div>
    );
};

export default ProductCounter;