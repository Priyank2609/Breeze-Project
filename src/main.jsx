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

import Women from './pages/Women.jsx';

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
        element:<Women/>
      }

    ]
  }
])
 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Global/>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
