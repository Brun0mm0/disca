import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading:false,
        isAuthenticated:false,
        token:null,
        error:null,
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state,action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.loading = false;
            state.error= null;
        },
        loginFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
        logout: (store) => {
            store.isAuthenticated = false;
            store.token = null;
        } 
    } 
})

export const {loginRequest,loginSuccess,loginFailure,logout} = loginSlice.actions