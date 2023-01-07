import React from 'react';
import './productCard.scss'
import {useDispatch} from "react-redux";
import {setProductInfoVisible} from "../../store/toolKitRedux/modalsSlice";
import {setSelectedProduct} from "../../store/toolKitRedux/restaurantSlice";

const ProductCard = ({product, isVisible}) => {
    const dispatch = useDispatch()
    const productDataClickHandler = () => {
        dispatch(setProductInfoVisible(true))
        dispatch(setSelectedProduct(product))
    }
    const buttonClickHandler = () => {

    }

    if (!isVisible) return <div className='productCard'/>

    return (
        <div className='productCard'>
            <div className='productCard__productData'
                 onClick={productDataClickHandler}
            >
                <div className='productCard__imageDiv'>
                    <img src={product.picture} alt={product.name}/>
                </div>
                <div className='productCard__price'>{product.price}</div>
                <div className='productCard__name'>{product.name}</div>
                <div className='productCard__weight'>{product.weight}</div>
            </div>
            <div className='productCard__buttons'>
                <div
                    className='productCard__button'
                    onClick={buttonClickHandler}
                >
                    + Add
                </div>
            </div>


        </div>

    );
};

export default ProductCard;