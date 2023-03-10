import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expiryTimestamp: new Date("2023-03-09T19:33:50"),
    isAvailable: true
}


const timer = createSlice({
    name: "timer",
    initialState: initialState,
    reducers: {
        setExpiryTimestamp: (state, action) => {
            state.expiryTimestamp = action.payload
            state.isAvailable = true
        },
        closeTimer: state => {
            state.isAvailable = false
        }
    }
})

export default timer.reducer
export const {setExpiryTimestamp, closeTimer} = timer.actions