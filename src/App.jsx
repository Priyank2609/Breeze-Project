import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './header/Header'
import Navigation from './header/navigation/Navigation'
import SImage from './image/Image'
import Body from './body/Body'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
// import CartProvider from './cart/CartContext'
// import ProductDataProvider from './cart/ProductData'
import PopUp from './cart/Popup'


// import './App.css'

function App() {
  return (
    <>
     {/* <CartProvider> */}
      <PopUp/>
      <Header/>
      <Navigation/>
      <Outlet/>
      <Footer/> 
     
      {/* </CartProvider> */}
      
    </>
  )
}

export default App
