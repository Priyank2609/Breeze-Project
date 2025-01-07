import React, { useContext,useEffect,useState } from 'react';
// import { CardContext, useCart } from './CartContext';
import styled from 'styled-components';
// import { data } from "../pages/Women";
import REACTDOM from "react-dom"
import { useSelector,useDispatch } from 'react-redux';
import { getPopIn, getPopUp } from '../slice/addSlice';

const PopUp = () => {
 const visible=useSelector((state)=>state.carts.visible)
 const dispatch=useDispatch()

 setTimeout(()=>{
    dispatch(getPopIn())
  },4000)





  return  REACTDOM.createPortal(
 
    <Pop>
    {visible?
 
        <div className="popup">
              <div className="closed">
       <h3>Item Is Successfully  Added to Cart!</h3>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.like}</li>
        ))}
      </ul> */}
     <i onClick={()=>dispatch(getPopIn())} className="fa-solid fa-xmark" ></i>
     </div>
     
    </div>
    :<></>}
    </Pop>,
     document.querySelector(".portal")
  

  );
 
};

export default PopUp;


export const Pop=styled.div`




.popup{
  position: fixed;
  color: rgb(22,101,52);
  background-color: rgb(187,247,208);
  border-radius: 2rem;
  top: 10%;
  width: 80%;
  z-index: 1;
  left: 50%;
  transform: translate(-50%,-50%);


    
   
    
    .closed{
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
   
}
   
`