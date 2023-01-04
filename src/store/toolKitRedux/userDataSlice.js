import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    location: "",
    lang: "en"
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setLang: (state,action)=>{
            const availableLang = ['en','ru']
            const defaultLang = availableLang[0]
            state.lang = availableLang.includes(action.payload) ?   action.payload : defaultLang
        }
    }
})

export default userDataSlice.reducer
export const {setLocation} = userDataSlice.actions