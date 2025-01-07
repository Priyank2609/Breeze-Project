import React from 'react';
// import { CardContext } from '../cart/CartContext';
// import { useContext } from 'react';
import styled from 'styled-components';
// import { useData } from '../cart/ProductData';

import { useDispatch ,useSelector} from 'react-redux';
import { addToCart} from '../slice/addSlice';
import { NavLink } from 'react-router-dom';



const Listveiw = () => {
    // const {products}=useData();
    // const cart=useContext(CardContext)
         const carts=useSelector((state)=>state.products.productList)
    const dispatch=useDispatch()
    return(
        <>
        <List>
             <div className="flexs">
        {carts.map((d,idx)=>{
            return (
                <div className="hr" key={idx}>
               <div className="divs" >

                <div className="productcards">
                    <div className="productimages">
                    
                      
                  
                     <img src={d.img[0]} alt="" /> 
                   
  
    

                         </div>

                                 </div> 
              
                    <div className="productinfos">
                        <div className="titles">
                    <h2>{d.like}</h2>
                    </div>
                    <div className="prices">
                    <span>${d.price}.00</span>
                    </div>
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
 <div className="pika">
 <div className="items">
                       



                       <NavLink to={`/addtocart/${d._id}`}>
                                     <button
                                       className="btns"
                                       onClick={() => dispatch(addToCart(d._id))}
                                     >
                                       {d.btnn}
                                     </button>
                         </NavLink>
                     
                      
                         </div>
                         <div className="hiis">
                         <button className='likes'><i className="fa-regular fa-heart"></i></button>
                         <button className="weights"><i className="fa-solid fa-scale-balanced"></i></button> 
                         </div>
                         </div>            
   
                      <p className='ps'>Learn More</p>
                    
                      </div>
                     
                         </div>
                         <hr />
                         </div>
                            );
                        })}
                       
          
       
                      
           </div>
           
           </List>
          
        </>
    )
}
export default Listveiw;


export const List=styled.div`
.flexs{
   display: flex;
   flex-wrap: wrap;
   gap: 1.5rem;
   width: 100%;
}
.hr{
    width: 100%;

}
    .divs{
        display: flex;
        gap: 1.5rem;
        padding-bottom: 1.5rem;
      
    }
    
    .productcards{
       
      img{
        width: 325px;
        max-width: 100%;
        mix-blend-mode:multiply;
       
      }
     
    }

    .hey{
        @media (max-width:1030px){
            display: none;
        }
    }
    .productinfos{
        .prices{
            margin: 5px 0;
            color: gray;
        }
        .titles{
            h2{
                font-size: 1rem;
            font-weight: 600;
            margin-bottom: 5px;
            }
        }
        ul{
            display: flex;
            margin: 10px 0;
            gap: 1rem;

            li{
                list-style: none;
                color: rgb(17 24 39 / 60%);
                height: 1.6rem;
    width: 1.6rem;
    background-color: rgb(243 244 246);
    box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
            }
        }
    }
    .hiis{
        display: flex;
        gap: 1rem;
       
    }
    .cols{

        .red{
            background-color: red;
        }
        .pink{
            background-color: pink;
        }
        .green{
            background-color: green;
        }
    }
        .btns{
            gap: .25rem;
            font-weight: 600;
            padding: .5rem 1.25rem;
            color: rgb(75 85 99);
            background-color: rgb(229 231 235);
            border:2px solid rgb(229 231 235 / 0%);
            border-radius: .25rem;
            cursor: pointer;
            
        }
      

    .likes{
            color: rgb(17 24 39 / 40%);
            font-size: 1.6rem;
            background-color: white;
            border: none;
            cursor: pointer;
            &:hover{
                color: black;
            }
        }
        .weights{
            color: rgb(17 24 39 / 40%);
            font-size: 1.6rem;
            background-color: white;
            border: none;
            cursor: pointer;
            &:hover{
                color: black;
            }
        }
    .pika{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 6px 0;
       
    }
    .ps{
        border: none;
        font-weight: 500;
        font-size: 1rem;
            margin-top: .5rem;
        }
        .productimages{
            background-color: #faf7f7;
        }
`