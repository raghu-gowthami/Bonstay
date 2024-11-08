import { configureStore } from "@reduxjs/toolkit";
import registerUser from "./Slices/registerSlice";
import themeSlice from "./Slices/themeSlice";
import bookingReducer from "./Slices/bookingSlice";
import reviewReducer from './Slices/reviewSlice';

const store = configureStore({
    reducer: {
        user: registerUser,
        theme: themeSlice,
        booking: bookingReducer,
        reviews: reviewReducer,

    },
})

export default store;