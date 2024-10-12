import {createSlice } from '@reduxjs/toolkit';



// Inside todoSlice.js
const initialState = {
    products: [], // Ensure products is an empty array initially
  };
  
  const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.products = action.payload;
      },
      removeProduct:(state)=>{
         state.products=[]
      }

    }
  });
  
  export const { addProduct,removeProduct } = todoSlice.actions;
  export default todoSlice.reducer;
  