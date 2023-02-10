import { configureStore } from "@reduxjs/toolkit";
import timer from "./timer";

const store = configureStore({
    reducer: {
        timer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
            serializableCheck: false
        }
    )
})

export default store