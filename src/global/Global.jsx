import React from 'react';
import {createGlobalStyle} from "styled-components"

const Globalstyle= createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
   
    html{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', Arial,"noto sans" ,sans-serif,noto color emoji;
       
        @keyframes appear{
      from{
        opacity: 0;
        transform: translateY(10px);
      }
      to{
        opacity: 1;
        transform: translateY(0px);
      } 
    }
    animation: appear 1s linear; 
 
    
    

   }
`

   






const Global = () => {
    return(
        <>
            <Globalstyle/>
        </>
    )
}
export default Global;