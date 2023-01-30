import React from 'react';
import CreditCardView from "./creditCardView/CreditCardView";
import CreditCardForm from "./creditCardForm/CreditCardForm";
import './purchase.scss'
import Button from "../UI/buttons/button/Button";
import {useNavigate} from "react-router-dom";

const Purchase = () => {
    const navigate = useNavigate()
    const backButtonClickHandler = () => {
        navigate(-1)
    }

    return (
        <div className='purchase'>
            <div className='purchase__back-button'>
                <Button
                    text={'Вернуться к покупкам'}
                    onClick={backButtonClickHandler}
                />
            </div>

            <h1 className='purchase__header'>{'Оплата'}</h1>
            <div className='purchase__credit-card'>
                <CreditCardView/>
                <CreditCardForm/>
            </div>

        </div>
    );
};

export default Purchase;