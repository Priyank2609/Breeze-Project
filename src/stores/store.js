import {configureStore} from "@reduxjs/toolkit" 
import cartReducer from "../slice/addSlice"
import prodReducer from "../slice/productSlice"
import authReducer from "../slice/userSlice"
import wishlistSlice from "../slice/wishlistSlice"


export const store=configureStore({
    reducer:{
        carts:cartReducer,
        products:prodReducer,
        auth:authReducer,
        wish:wishlistSlice
        
    },
})