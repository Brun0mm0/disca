import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices";

export const store = configureStore({
    reducer: {
        login:loginSlice.reducer
    }
})