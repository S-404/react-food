import React from 'react';
import CreditCardView from "./creditCardView/CreditCardView";
import CreditCardForm from "./creditCardForm/CreditCardForm";

const Purchase = () => {

    return (
        <div>
            <h1>Purchase</h1>
            <CreditCardView/>
            <CreditCardForm/>
        </div>
    );
};

export default Purchase;