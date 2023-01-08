import React from 'react';
import {useSelector} from "react-redux";
import './productInfo.scss'
import Button from "../UI/buttons/button/Button";

const ProductInfo = () => {
    const selectedProduct = useSelector(state => state.restaurant.selectedProduct)
    const addButtonClickHandler = () => {

    }
    if (!selectedProduct.id) return null
    return (
        <div className='productInfo'>
            <div className='productInfo__info'>
                <div className='info__description'>
                    {selectedProduct.description}
                </div>
            </div>
            <div className='productInfo__productInfoFooter'>
                <div className='productInfoFooter__buttons'>
                    <div className='buttons__button'>
                        <Button
                            text={'+ Add'}
                            onClick={addButtonClickHandler}
                        />
                    </div>
                    <div className='buttons__button'>
                        counter
                    </div>
                </div>

                <div className='productInfoFooter__amount'>
                    <span>Amount</span>
                </div>
            </div>


        </div>
    );
};

export default ProductInfo;