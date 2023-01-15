import React from 'react';
import ProductCard from "../../productCard/ProductCard";
import './cartItem.scss'
const CartItem = ({item}) => {
    return (
        <div className='cartItem'>
            <ProductCard
                product={item}
                isVisible={true}
                showAmount={true}
            />
        </div>
    );
};

export default CartItem;