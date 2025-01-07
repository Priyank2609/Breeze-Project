import React from 'react';
import styled from 'styled-components';
// import { useData } from '../cart/ProductData';
import {useDispatch, useSelector} from "react-redux"
import { filterByColor, removeColor, removeColors, setColor } from '../slice/productSlice';



const Shop = () => {

    
    // const {dispatch( filterByColor,removeColor,color}=useData();
    const color=useSelector((state)=>state.products.color)
    const colors=useSelector((state)=>state.products.colors)
    const dispatch=useDispatch()
    // console.log(color)
    return(
        <>
            <Shoping>
            <div className="shop">
        
        <div className="menubar">
          
            <input type="checkbox" id='checks'/>
            <div className="he">
            <label htmlFor="checks">
        
   
   
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
     </label>
             <p>Shop By</p>
        
             </div>
           
    <div className="menu">  
    <div className="black">
    < input type="checkbox" id='checks'/>

                <div className="icon">
                  <label htmlFor="checks">
                    <i className="fa-solid fa-xmark"></i>
                   </label>
                  </div>
              {color?
              
              <div className="category">
              <div className="title">
                  Now Shopping by
              </div>
              <ul className='remove'>
                <li>
                   Color: {colors}
                </li>
                <i className="fa-solid fa-xmark" onClick={()=>dispatch(removeColor())&dispatch(removeColors())} ></i>
              </ul>
              <div className="clear">
              <p   onClick={()=>dispatch(removeColor())&dispatch(removeColors())}  >Clear All</p>
              </div>
            </div>
              :<>
              
              </>  
               }     
                  
             <div className="category">
                <div className="title">
                    Category
                </div>
                <div className="options">
                    <ul>
                        <li>
                            Tops
                          <span>(50)</span>
                        </li>
                        <li>
                            Bottoms
                        <span>(25)</span>
                        </li>
                    </ul>
                </div>
             </div>
             <div className="category">
                <div className="title">
                    Price
                </div>
                <div className="options">
                    <ul>
                        <li>$20.00-$29.99
                            
                          <span>(23)</span>
                        </li>
                        <li>$30.00-$39.99
                            
                          <span>(19)</span>
                        </li>
                        <li>$40.00-$49.99
                            
                          <span>(13)</span>
                        </li>
                        <li>$50.00-$59.99
                            
                          <span>(12)</span>
                        </li>
                        <li>$60.00-$69.99
                            
                            <span>(5)</span>
                          </li>
                          <li>$70.00-$79.99
                            
                            <span>(2)</span>
                          </li>
                          <li>$80.00 and above
                            
                            <span>(1)</span>
                          </li>
                    </ul>
                </div>
             </div>
             {color?<></>:
             <div className="category">
             <div className="title">
                Color
             </div>

             <div className="options">
                 <ul className='col'>
                    <li className='li' onClick={()=>{dispatch( filterByColor("black"))&dispatch(setColor())}}></li>
                    <li className='ki' onClick={()=>{dispatch( filterByColor("blue"))&dispatch(setColor())}}></li>
                    <li className='ji' onClick={()=>{dispatch( filterByColor("brown"))&dispatch(setColor())}}></li>
                    <li className='hi'onClick={()=>{dispatch( filterByColor("gray"))&dispatch(setColor())}}></li>
                    <li className='gi'onClick={()=>{dispatch( filterByColor("green"))&dispatch(setColor())}}></li>
                    </ul>
                    </div> 
                    <div className="options">
                    <ul className='col'>
                    <li className='fi'></li>
                    <li className='di'></li>
                    <li className='si'></li>
                    <li className='ai'></li>
                    <li className='pi'></li>
               
                    </ul>
                    </div> 
          </div>
           }  
             

             <div className="category">
                <div className="title">
                Size
                </div>
                <div className="options">
                    <ul className='col'>
                       <li className='oi'>XS</li>
                       <li className='ii' >S</li>
                       <li className='ui'>M</li>
                       <li className='yi'>L</li>
                       <li className='ti'>XL</li>
                       </ul>
                       </div> 
                       <div className="options">
                       <ul className='col'>
                       <li className='ri'>28</li>
                       <li className='ei'>29</li>
                       <li className='wi'>30</li>
                       <li className='qi'>31</li>
                       <li className='mi'>32</li>
                  
                       </ul>
                       </div> 
             </div>
             <div className="category">
                <div className="title">
                   New
                </div>
                <div className="options">
                    <ul>
                        <li>
                            Yes
                          <span>(17)</span>
                        </li>
                        <li>
                            No
                        <span>(58)</span>
                        </li>
                    </ul>
                </div>
             </div>
             <div className="category">
                <div className="title">
                    Sale
                </div>
                <div className="options">
                    <ul>
                        <li>
                            Yes
                          <span>(14)</span>
                        </li>
                        <li>
                           No
                        <span>(62)</span>
                        </li>
                    </ul>
                </div>
             </div>
             <div className="category">
                <div className="title">
                    Climate
                </div>
                <div className="options">
                    <ul>
                        <li>
                            All-Weather
                          <span>(18)</span>
                        </li>
                        <li>
                            Cold
                        <span>(4)</span>
                        </li>
                        <li>
                            Cool
                        <span>(20)</span>
                        </li>
                        <li>
                            Indoor
                        <span>(55)</span>
                        </li>
                        <li>
                            Mild
                        <span>(33)</span>
                        </li>
                        <li>
                            Rainy
                        <span>(2)</span>
                        </li>
                        <li>
                            Spring
                        <span>(28)</span>
                        </li>
                        <li>
                            Warm
                        <span>(43)</span>
                        </li>
                        <li>
                            Windy
                        <span>(8)</span>
                        </li>
                        <li>
                            Wintry
                        <span>(6)</span>
                        </li>
                        <li>
                            Hot
                        <span>(16)</span>
                        </li>
                    </ul>
                </div>
             </div>

             </div>
           
             </div>
             </div>
             
<br /><br />
<div className="none">
             <p>Compare Products</p>
             You have no items to compare.
       </div>
      
       </div>
            </Shoping>
        </>
    )
}
export default Shop;


export const Shoping=styled.div`
    .remove{
        display: flex;
        align-items: center;
        justify-content: space-between;

        i{
            color: gray;
            cursor: pointer;
        }
    }
    
        .clear{
             margin: 8px 0 12px 0;
            p{
                font-size: .875rem;
                opacity: 0.5;
                border: none;
                text-align: right;
                font-weight: 400;
                padding: 0;
                margin: 0;
                cursor: pointer;
                &:hover{
                    text-decoration: underline;
                }
            }
          
           
        }
    
`