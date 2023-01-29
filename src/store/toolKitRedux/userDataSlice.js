import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    location: "",
    lang: "ru",
    availableLang: ['en', 'ru'],
    creditCard: {
        cardNumber: "0000000000000000",
        cardHolderName: "NAME SURNAME",
        cardExpirationDate: "0000 00",
        cardCVV: "000",
        cardType: "💳",
        flip: false,
    }

}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setLang: (state, action) => {
            const defaultLang = state.availableLang[0]
            state.lang = state.availableLang.includes(action.payload) ? action.payload : defaultLang
        },
        setCreditCardNumber:(state,action)=>{
            state.creditCard.cardNumber = action.payload
        },
        setCreditCardHolderName:(state,action)=>{
            state.creditCard.cardHolderName = action.payload
        },
        setCreditCardExpirationDate:(state,action)=>{
            state.creditCard.cardExpirationDate = action.payload
        },
        setCreditCardCVV:(state,action)=>{
            state.creditCard.cardCVV = action.payload
        },
        setCreditCardType:(state,action)=>{
            state.creditCard.cardType = action.payload
        },
        setCreditCardFlip:(state,action)=>{
            state.creditCard.flip = action.payload
        },
    }
})

export default userDataSlice.reducer
export const {
    setLocation,
    setLang,
    setCreditCardNumber,
    setCreditCardHolderName,
    setCreditCardCVV,
    setCreditCardExpirationDate,
    setCreditCardFlip,
    setCreditCardType,
} = userDataSlice.actions