import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Global from './global/Global.jsx';
// import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Body from './body/Body.jsx';
import SignIn from './pages/SignIn.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Forget from './pages/Forget.jsx';
import { Provider } from 'react-redux';
import { store } from './stores/store.js';
import Women from './pages/Women.jsx';
import AddToCart from './pages/AddToCart.jsx';
// import { fetchData } from './api/Api.jsx';
// import { fetchData } from './api/Api.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Body/>
      },
      {
        path:"/signIn",
        element:<SignIn/>
      },
      {
        path:"/account",
        element:<CreateAccount/>
      },
      {
        path:"/forget",
        element:<Forget/>
      },
      {
        path:"/Women",
        element:<Women/>,
        //  loader:fetchData
      },
      {
        path:"/addtocart/:id",
        element:<AddToCart/>
      }
      
    ],
   
    
  }
])
 


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <Provider store={store}>
     <Global/>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
  </React.StrictMode>

  
)
