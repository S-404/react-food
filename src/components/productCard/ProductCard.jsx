import React from 'react';
import './productCard.scss'
import {useDispatch, useSelector} from "react-redux";
import {setProductInfoVisible} from "../../store/toolKitRedux/modalsSlice";
import {setSelectedProduct} from "../../store/toolKitRedux/restaurantSlice";
import ProductCardImg from "./ProductCardImg";
import ProductAddButton from "../productAddButton/ProductAddButton";
import ProductCounter from "../productCounter/ProductCounter";
import useProductInCart from "../../hooks/useProductInCart";

const ProductCard = ({product, isVisible}) => {
    const storeCurrency = useSelector(state => state.restaurant.data?.currency)
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    const productDataClickHandler = () => {
        dispatch(setProductInfoVisible(true))
        dispatch(setSelectedProduct(product))
    }
    const productInCart = useProductInCart(product, cartItems)

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
                {productInCart.id ?
                    <ProductCounter product={productInCart}/>
                    :
                    <ProductAddButton product={product}/>
                }
            </div>


        </div>

    );
};

export default ProductCard;