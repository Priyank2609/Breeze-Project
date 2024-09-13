import React from 'react';
import styled from 'styled-components';

const SImage = () => {
    return(
        <>
            <Img>
            <Wave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#fff" fillOpacity="1" d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,202.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

            </Wave>
            <div className="cont">
           <h1>
           
            Smart Gadgets for your <br />personal space
             
            <p>Explore our new gadget collection</p>
            
            <button>Shop now</button>
            </h1>
            </div>
            </Img>

          
        </>
    )
}
export default SImage;

export const Img=styled.div`
    background-image: url("https://breeze.swissupdemo.com/media/wysiwyg/breeze-evolution/gadgets-1200.webp");
    /* height: 700px; */
    background-size: cover;
    background-position:center;
    min-height: clamp(300px, 1000px, 80vh);
    overflow: hidden;
    position: relative;
    
    .cont{
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      min-height: clamp(300px, 1000px, 80vh);
      padding: 30px;
    
    
    h1{
       
     
       
        font-weight: 700;
        height: 100%;
        color:white;
        font-size: clamp(2rem, 5vw, 4rem);
        text-align: center;
        
    }
  }
  p{
    padding: 10px 0;
    font-size: 1.5rem;
    font-weight: 500;
  }
  button{
    width: 125px;
    height: 45px;
    text-align: center;
    background-color: transparent;
    border-color: white;
    color:white;
    font-size: 1rem;
    opacity: 0.9;
    &:hover{
        background-color: rgb(255, 255, 255,0.1);
       
        cursor: pointer;
    }
   
  }
  &:hover{
    cursor: pointer;
   
  }
`
export const Wave=styled.div`
  position: absolute;
  bottom: -1%;
  width:100%;
  


`