import React from 'react';
import { useState } from 'react';
// import { useData } from '../cart/ProductData';
import Products from './Products';
import Listveiw from './Listveiw';
import { useDispatch, useSelector } from 'react-redux';
import { getveiw, setVeiw, sortByName, sortByPositions, sortByPrice } from '../slice/productSlice';

const Menubar = () => {


    // const [veiw,setVeiw]=useState(true)
   const veiw=useSelector((state)=>state.products.veiw)
    const dispatch=useDispatch()
    // const {sortByName,sortByPositions,sortByPrice}=useData();

    function handleSort(e){
        const Selected=e.target.value
     
        if (Selected==="name") {
         dispatch(sortByName())
        }
        else if(Selected==="position"){
         dispatch(sortByPositions());
         
        }
        else {
         dispatch(sortByPrice())
        }
        
        
        
        
         }
   

    return(
        <>
            <div className="toolbar">
      <div className="size">
          <div className="icons">
            
                   <i  onClick={()=>dispatch(setVeiw())} className="fa-solid fa-qrcode grid"></i>
                  

                    <i onClick ={()=>dispatch(getveiw())} className="fa-solid fa-bars list"></i>
                  
              
         
         
          </div>
          <p>Items
          <span>1-12 of 75</span>
          </p>
      </div>
      <div className="tool">
     <p className="sort" >Sort By</p>
      <select id="pad" onClick={handleSort} >
          <option value="position" >Position</option>
          <option value="name" >Product Name</option>
          <option value="price">Price</option>
          
      </select>
      <i className="fa-solid fa-arrow-up-long"></i>
      </div>
  </div>
  {
      veiw ==true?
      <>
  <Products/>
  </>:
      <>
       <Listveiw/>
      </>
}
        </>
    )
}
export default Menubar;