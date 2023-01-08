import React from 'react';
import './productCard.scss'
import {useDispatch, useSelector} from "react-redux";
import {setProductInfoVisible} from "../../store/toolKitRedux/modalsSlice";
import {setSelectedProduct} from "../../store/toolKitRedux/restaurantSlice";
import Button from "../UI/buttons/button/Button";
import ProductCardImg from "./ProductCardImg";

const ProductCard = ({product, isVisible}) => {
    const storeCurrency = useSelector(state => state.restaurant.data?.currency)
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
                <ProductCardImg product={product}/>
                </div>
                <div className='productCard__price'>
                    {`${storeCurrency}${product.price}`}
                </div>
                <div className='productCard__name'>{product.name}</div>
                <div className='productCard__weight'>{product.weight}</div>
            </div>
            <div className='productCard__buttons'>
                <Button
                    onClick={buttonClickHandler}
                    text={'+ Добавить'}
                />
            </div>


        </div>

    );
};

export default ProductCard;