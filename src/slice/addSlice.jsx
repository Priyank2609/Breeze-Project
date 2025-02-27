import { createSlice } from "@reduxjs/toolkit";
// import { data } from '../productData';
import { getData } from "../productData";
import React from "react";
import { json, useLoaderData } from "react-router-dom";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalCost: JSON.parse(localStorage.getItem("cost")) || 0,
  visible: false,
  navbar: false,
  selectItems: null,
  recentlyView: JSON.parse(localStorage.getItem("recentlyView")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToRecentlyViewed: (state, action) => {
      const prodId = action.payload;
     

      let viewItems = state.recentlyView.findIndex(
        (item) => item._id === prodId._id
      );
      console.log(viewItems);

      if (viewItems >= 0) {
        state.recentlyView = state.recentlyView.filter(
          (item) => item._id !== prodId._id
        );
        state.recentlyView.unshift(prodId);
      } else {
        state.recentlyView.push(prodId);
        localStorage.setItem(
          "recentlyView",
          JSON.stringify(state.recentlyView)
        );
      }
    },
  

    findQuantity: (state, action) => {
      const quantity = state.cart.find(
        (el) => el._id === action.payload
      )?.quantity;

      if (quantity == undefined) {
        return 0;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return quantity;
    },
    addToCart: (state, action) => {
      const quantity = cartSlice.caseReducers.findQuantity(state, action);

      state.total = true;

      if (quantity == 0) {
        state.cart.push({
          _id: action.payload,
          quantity: 1,
        });
      } else {
        state.cart = state.cart.map((item) => {
          return item._id == action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addProductToCart: (state, action) => {
      const quantity = cartSlice.caseReducers.findQuantity(state, action);

      if (quantity == 0) {
        state.cart.push({
          _id: action.payload,
          quantity: 1,
        });
      } else {
        state.cart = state.cart.map((item) => {
          return item._id == action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (products) => products._id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeProduct: (state, action) => {
      const quantity = cartSlice.caseReducers.findQuantity(state, action);
      if (quantity == 1) {
        cartSlice.caseReducers.deleteFromCart(state, action);
      } else {
        state.cart = state.cart.map((product) =>
          product._id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    getTotalCost: (state, action) => {
      state.totalCost = 0;
      state.cart.map((product) => {
        let productData = getData(product._id);
        state.totalCost += productData.price * product.quantity;
        if (state.totalCost) {
          localStorage.setItem("cost", JSON.stringify(state.totalCost));
        } else {
          localStorage.removeItem("cost");
        }
      });

      console.log(state.totalCost);
    },
    getPopUp: (state) => {
      state.visible = true;
    },
    getPopIn: (state) => {
      state.visible = false;
    },
    getTotal: (state) => {
      state.total = false;
    },
    getNav: (state) => {
      state.navbar = true;
    },
  },
});

// export const {
//   addItemToCart,
//   removeItemFromCart,
//   updateItemQuantity,
//   toggleCartVisibility,
// } = cartSlice.actions;

export const {
  addProductToCart,
  removeProduct,
  findQuantity,
  getTotalCost,
  getPopUp,
  deleteFromCart,
  addToCart,
  getPopIn,
  getNav,
  addToRecentlyViewed,
} = cartSlice.actions;

export default cartSlice.reducer;
