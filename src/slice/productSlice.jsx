import { createSlice } from "@reduxjs/toolkit";




// import React from 'react';
import { useLoaderData } from "react-router-dom";
// import { data } from "../productData";
import { priyank } from "../api/Api";
// import { data } from "../productData";
// import { fetchData } from "../api/Api";
// import { data } from "../productData";

//  const Api =  () => {
//   const  proData=useLoaderData();
//    return proData;
// };

// const apiData=Api()


const initialState = {
  productList: priyank,
  colors: [],
  veiw: true,
  color: false,
};

export const prodSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByColor: (state, action) => {
      state.colors.push(action.payload);
      state.productList = state.productList.filter((col) => {
        if (col.color) {
          return col.color.includes(action.payload);
        }
      });
    },
    getveiw: (state) => {
      state.veiw = false;
    },
    setVeiw: (state) => {
      state.veiw = true;
    },

    sortByName: (state) => {
      const sortedProducts = state.productList
        .slice()
        .sort((a, b) => a.like.localeCompare(b.like));
      state.productList = sortedProducts;
    },
    sortByPositions: (state, action) => {
      state.productList = priyank;
    },

    sortByPrice: (state) => {
      const price = state.productList.slice().sort((a, b) => a.price - b.price);

      state.productList = price;
    },
    removeColor: (state) => {
      state.colors = [];
    },
    setColor: (state) => {
      state.color = true;
    },
    removeColors: (state) => {
      state.color = false;
      state.productList = priyank;
    },
  },
});


export const  {filterByColor,getveiw,sortByName,sortByPositions,sortByPrice,removeColor,setVeiw,setColor,removeColors}=prodSlice.actions

export default prodSlice.reducer;