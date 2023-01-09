import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../store/toolKitRedux/cartSlice";
import Counter from "../UI/counter/Counter";

const ProductCounter = ({product}) => {

    const dispatch = useDispatch()

    const increment = () => {
        dispatch(addToCart(product))
    }
    const decrement = () => {
        dispatch(removeFromCart(product))
    }

    return (
        <div>
            <Counter
                value={product.cartItemQty}
                increment={increment}
                decrement={decrement}
            />
        </div>
    );
};

export default ProductCounter;