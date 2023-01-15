import React, {useMemo} from 'react';
import './productCard.scss'
import {useDispatch, useSelector} from "react-redux";
import {setProductInfoVisible} from "../../store/toolKitRedux/modalsSlice";
import {setSelectedProduct} from "../../store/toolKitRedux/restaurantSlice";
import ProductCardImg from "./ProductCardImg";
import ProductAddButton from "../productAddButton/ProductAddButton";
import ProductCounter from "../productCounter/ProductCounter";
import useProductInCart from "../../hooks/useProductInCart";

const ProductCard = ({product, isVisible, showAmount}) => {
    const storeCurrency = useSelector(state => state.restaurant.data?.currency)
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    const productDataClickHandler = () => {
        dispatch(setProductInfoVisible(true))
        dispatch(setSelectedProduct(product))
    }
    const productInCart = useProductInCart(product, cartItems)

    const totalPrice = useMemo(() => {
        return showAmount && productInCart.id ?
            productInCart.price * product.cartItemQty :
            product.price
    }, [productInCart.cartItemQty])

    if (!isVisible) return <div className='productCard'/>

    return (
        <div className='productCard'>
            <div className='productCard__productData'
                 onClick={productDataClickHandler}
            >
                <div className='productData__imageDiv'>
                    <ProductCardImg product={product}/>
                </div>
                <div className='productData__textInfo'>
                    <span className='textInfo__price'>
                        {`${storeCurrency}${totalPrice}`}
                    </span>
                    <span className='textInfo__name'>{product.name}</span>
                    <span className='textInfo__weight'>{product.weight}</span>
                </div>
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