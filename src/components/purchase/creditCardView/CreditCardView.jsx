import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCreditCardFlip} from "../../../store/toolKitRedux/userDataSlice";
import './creditCardView.scss'

const CreditCardView = () => {
    const creditCard = useSelector(state => state.userData.creditCard)
    const dispatch = useDispatch()
    const flipCard = () => {
        dispatch(setCreditCardFlip(!creditCard.flip))
    };
    return (
        <div className="credit-card"
             onClick={flipCard}
        >
            <div className={`credit-card__inner ${creditCard.flip ? 'credit-card__inner_flipped' : ''}`}>
                <div className="credit-card__front">

                    <div className="card-type">{creditCard.cardType}</div>
                    <div className="card-number">{creditCard.cardNumber}</div>

                    <div className="card-expiration">
                        {creditCard.cardExpirationDate !== "" &&
                            <div className="valid">Valid Thru</div>}
                        {creditCard.cardExpirationDate}
                    </div>

                    <div className="card-holder-name">{creditCard.cardHolderName}</div>
                </div>
                <div className="credit-card__back">
                    <div className="card-stripe"/>
                    <div className="card-sig-container">
                        <div className="signature">{creditCard.cardHolderName}</div>
                        CVC {creditCard.cardCVV}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardView;