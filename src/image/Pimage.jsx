import React from 'react';
import styled from 'styled-components';

const Pimage = () => {
    return(
        <>
        <H3>
           <Div>
              <H4>
               <h2>Stylish gadgets
               for everyone</h2>
               <p>Pantone’s coral essence is one of the ultimate colour trends for the spring/summer season of 2022</p>
               <button>Shop now</button>
               </H4>
           </Div>
        </H3>
        </>
    )
}
export default Pimage;


export const H3=styled.div`
margin-top: 20px;
width: 100%;

height: 500px;
background-image  : url("https://breeze.swissupdemo.com/media/wysiwyg/breeze-evolution/headphones.webp");
background-size: cover;
background-position: center;
position: relative;
display: flex;
align-items: center;


@media (max-width: 570px){
    box-sizing: border-box;
    height: 100%;
    
}
`
export const Div=styled.div`
   

  
   
    padding: 50px 0 ;
    
    color: white;
    cursor: pointer;
    h2{
        font-size: clamp(2rem, 5vw, 4rem);
       
       
    }
    
    
    button{
        width: 175px;
        height: 56px;
        text-align: center;
        margin-top: 30px;
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 4%;
        transition: all.5s;
        &:hover{
            background-color: #dfdede;
            cursor: pointer;
        }
    }
  
`

export const H4=styled.div`
   max-width: 600px;
   /* width: 100%; */
  padding-top: 30px;
  margin-left :50px ;
  
  @media (max-width: 524px){
    max-width: 50%;
  }


`