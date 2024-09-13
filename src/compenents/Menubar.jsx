import React from 'react';
import { useState } from 'react';
import { useData } from '../cart/ProductData';
import Products from './Products';
import Listveiw from './Listveiw';

const Menubar = () => {


    const [veiw,setVeiw]=useState(true)
    const {sortByName,sortByPositions,sortByPrice}=useData();

    function handleSort(e){
        const Selected=e.target.value
     
        if (Selected==="name") {
         sortByName()
        }
        else if(Selected==="position"){
         sortByPositions();
         
        }
        else {
         sortByPrice()
        }
        
        
        
        
         }
   

    return(
        <>
            <div className="toolbar">
      <div className="size">
          <div className="icons">
            
                   <i  onClick ={()=>setVeiw(true)} className="fa-solid fa-qrcode grid"></i>
                  

                    <i onClick ={()=>setVeiw(false)} className="fa-solid fa-bars list"></i>
                  
              
         
         
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
      veiw ===true?
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