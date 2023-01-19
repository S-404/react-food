import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import './productInfo.scss'
import useProductInCart from "../../hooks/useProductInCart";
import ProductAddButton from "../productAddButton/ProductAddButton";
import ProductCounter from "../productCounter/ProductCounter";
import ProductCardImg from "../productCard/ProductCardImg";

const ProductInfo = () => {
    const storeCurrency = useSelector(state => state.restaurant.data?.currency || '')
    const cartItems = useSelector(state => state.cart.cartItems)
    const product = useSelector(state => state.restaurant.selectedProduct)
    const productInCart = useProductInCart(product, cartItems)

    const totalPrice = useMemo(() => {
        return (product.price || 0) * (productInCart.cartItemQty || 0)
    }, [productInCart.cartItemQty])

    if (!product.id) return null
    return (
        <div className='productInfo'>
            <div className='productInfo__info'>
                <div className='info__imageDiv'>
                    <ProductCardImg product={product}/>
                </div>
                <div className='info__description'>
                    <p dangerouslySetInnerHTML={{__html: product.description}}/>
                </div>
            </div>
            <div className='productInfo__productInfoFooter'>
                <div className='productInfoFooter__buttons'>
                    {productInCart.id ?
                        <div className='buttons__button'>
                            <ProductCounter product={productInCart}/>
                        </div>
                        :
                        <div className='buttons__button'>
                            <ProductAddButton product={product}/>
                        </div>
                    }

                </div>

                <div className='productInfoFooter__amount'>
                    <span>{`${totalPrice} ${storeCurrency}`}</span>
                </div>
            </div>


        </div>
    );
};

export default ProductInfo;