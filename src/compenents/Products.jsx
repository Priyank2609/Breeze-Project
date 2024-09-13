import React from 'react';

import { CardContext } from '../cart/CartContext';
import { useContext } from 'react';
import { useData } from '../cart/ProductData';
const Products = () => {

    const {products}=useData();
    

    

    const cart=useContext(CardContext)

    return(
        <>
      
      <div className="flex">
  {products.map((d,idx)=>{
      return (
         <div className="div" key={idx}>

          <div className="productcard">
              <div className="productimage">
              
                
            
               <img src={d.img} alt="" /> 
              
                <button className='like'><i className="fa-regular fa-heart"></i></button>
                <button className="weight"><i className="fa-solid fa-scale-balanced"></i></button>
                
                { cart.getProductQuantity (d.id)> 0 ? 
                   <>
                  
                          </>
                          
                 :
                 <button className='btn' onClick={() => cart.addOneToCart(d.id)}>{d.btnn}</button>
               
               }
              
                <button className='btn' onClick={() => cart.addOneToCart(d.id)}>{d.btnn}
               
                </button>
              <div className="hey">
              <div className="sizes">
<ul className='siz'>
   <li>28</li>
   <li>29</li>
   <li>30</li>
   <li>31</li>
   <li>32</li>
</ul>
</div>
<div className="cols">
<ul className="color">
<li className='red'></li>
<li className='pink'></li>
<li className='green'></li>
</ul>
</div>

</div> 


                   </div>

                           </div> 
        
              <div className="productinfo">
              <h2>{d.like}</h2>
              <span>${d.price}.00</span>
                
                   </div>
                   
                   

                     
                      
                   </div>
                   
                      );
                    
                  })
                  
                
                  }
                 
                 
                
     </div>
      
   
        </>
    )
}
export default Products;