import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    location: "",
    lang: "en",
    availableLang:  ['en','ru']
}

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setLang: (state,action)=>{
            const defaultLang = state.availableLang[0]
            state.lang = state.availableLang.includes(action.payload) ? action.payload : defaultLang
        }
    }
})

export default userDataSlice.reducer
export const {setLocation, setLang} = userDataSlice.actions