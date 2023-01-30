import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './creditCardForm.scss'
import {
    setCreditCardCVV,
    setCreditCardExpirationDate,
    setCreditCardFlip,
    setCreditCardHolderName,
    setCreditCardNumber,
    setCreditCardType
} from "../../../store/toolKitRedux/userDataSlice";

const CreditCardForm = () => {
    const creditCard = useSelector(state => state.userData.creditCard)
    const dispatch = useDispatch()
    const flipCard = () => {
        dispatch(setCreditCardFlip(true))
    };
    const unFlipCard = () => {
        dispatch(setCreditCardFlip(false))
    };
    const checkSubstring = (length, match) => {
        return creditCard.cardNumber.substring(0, length) === match;
    };

    const setNumber = (e) => {
        let cardNumber = e.target.value;
        let cardType = ""
        if (cardNumber[0] === "4") {
            cardType = "Visa"
        } else if (checkSubstring(4, "6011")) {
            cardType = "Discover"
        } else if (checkSubstring(2, "51")) {
            cardType = "MasterCard"
        } else {
            cardType = "💳"
        }
        dispatch(setCreditCardType(cardType))
        dispatch(setCreditCardNumber(cardNumber))
    };
    const setName = (e) => {
        const cardHolderName = e.target.value.toUpperCase();
        dispatch(setCreditCardHolderName(cardHolderName))
    };
    const setDate = (e) => {
        let data = (e.target.value).split("");
        let cardExpirationDate = (data.map((x) => {
            return x === "-" ? "/" : x
        })).join("");
        dispatch(setCreditCardExpirationDate(cardExpirationDate))
    };
    const setCVV = (e) => {
        let cardCVV = e.target.value;
        dispatch(setCreditCardCVV(cardCVV))
    };

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('1')
    }

    return (
        <form
            className="card-form"
            onSubmit={(e) => onSubmit(e)}
        >
            <label className="input-label">
                {'Номер карты'}
            </label>
            <input
                type='text'
                placeholder={"Введите номер карты"}
                id="number-input"
                name="number-input"
                className="text-input"
                maxLength="16"
                onChange={setNumber}
            />
            <label className="input-label">
                {'Владелец карты'}
            </label>
            <input
                type="text"
                placeholder={"Введите имя держателя карты"}
                value={creditCard.cardHolderName}
                onChange={e => setName(e)}
                className="text-input"
                maxLength="30"
            />
            <div className="date-and-csv">
                <div className='date-and-csv__date'>
                    <label className="input-label">
                        {'Срок действия карты'}
                    </label>
                    <input
                        type="month"
                        placeholder="Введите срок действия карты"
                        className="text-input"
                        onChange={e => setDate(e)}
                    />
                </div>
                <div className='date-and-csv__cvc'>
                    <label className="input-label">
                        {'CVC'}
                    </label>
                    <input
                        type='text'
                        placeholder={"Введите CVC"}
                        maxLength="3"
                        value={creditCard.cardCVV}
                        className="text-input"
                        onChange={e => setCVV(e)}
                        onFocus={flipCard}
                        onBlur={unFlipCard}
                    />
                </div>
            </div>

            <button
                className='card-form__submit-button'
                type='submit'
            >
                {'Оплатить'}
            </button>
        </form>
    );
};

export default CreditCardForm;