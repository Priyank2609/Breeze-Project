import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems:  null,
};


const wishlistSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
   
     addToWishlist:(state, action)=> {;
     
    state.wishlistItems=action.payload
    
      
  },
  deleteToWishlist:(state,action)=>{
     state.wishlistItems=null
  }
}
});


export const {addToWishlist,deleteToWishlist}=wishlistSlice.actions

export default wishlistSlice.reducer;
