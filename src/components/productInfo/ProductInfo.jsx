import React from 'react';
import {useSelector} from "react-redux";

const ProductInfo = () => {
    const selectedProduct = useSelector(state => state.restaurant.selectedProduct)
    if (!selectedProduct.id) return null
    return (
        <div>
            {selectedProduct.name}
        </div>
    );
};

export default ProductInfo;