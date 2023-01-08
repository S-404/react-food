import React from 'react';
import notFound from '../../assets/noimg/Image_not_available.png'

const ProductCardImg = ({product}) => {
    let url = product.picture?.uri ?
        'https://eda.yandex.ru/' + product.picture?.uri :
        notFound
    return (
        <div>
            <img src={url} alt={product.name}/>
        </div>
    );
};

export default ProductCardImg;