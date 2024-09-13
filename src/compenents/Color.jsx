import React from 'react';
import styled from 'styled-components'
import { CardContext } from '../cart/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import Listveiw from './Listveiw';
import Women from '../pages/Women';
import { useData } from '../cart/ProductData';


const data=[
    {
      id:1,
      img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh12-green_main_1.jpg",
      btnn:"Add to cart",
      like:"Erika Running Short",
      price:45.00
    },
    {  
      id:2,
      img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/s/wsh07-blue_main_1.jpg",
      btnn:"Add to cart",
      like:"Ina Compression Short",
      price:49.00
    },
    {  
      id:3,
      img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/s/wsh05-blue_main_1.jpg",
      btnn:"Add to cart",
      like:"Ana Running Short",
      price:40.00
    },
    {  
        id:4,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/s/wsh03-blue_main_1.jpg",
        btnn:"Add to cart",
        like:"Mimi All-Purpose Short",
        price:44.00
      },
      {  
        id:5,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/p/wp13-blue_main_1.jpg",
        btnn:"Add to cart",
        like:"Sybil Running Short",
        price:44.00
      },
      {  
        id:6,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/p/wp12-blue_main_1.jpg",
        btnn:"Add to cart",
        like:"Echo Fit Compression Short",
        price:24.00
      },
      {  
        id:7,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/p/wp11-blue_main_1.jpg",
        btnn:"Add to cart",
        like:"Angel Light Running Short",
        price:42.00
      },
      {  
        id:8,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/p/wp09-blue_main_1.jpg",
        btnn:"Add to cart",
        like:"Bess Yoga Short",
        price:28.00
      },
      {  
        id:90,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/24134db8111ffe47256fb85171957e65/w/p/wp04-blue_main_1.jpg",
        btnn:"Add to cart",
        like:"Artemis Running Short",
        price:45.00
      }
   
]

const Color = () => {
    const [veiw,setVeiw]=useState(true)
    const [color,setColor]=useState(true)
    const cart=useContext(CardContext)
    return(
        <>
        {color ===true?
         <>
                <Container>
      
      <div className="home">
          <ul className='ul'>
              <a href="/"><li><i className="fa-solid fa-house" ></i></li></a>
              <i className="fa-solid fa-angle-right" ></i>
              <li>Women</li>
          </ul>
      </div>

<div className="content">
      <div className="h4">
         <h4>Women</h4>
      </div>
  <div className="columns">
      
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
                    <div className="category">
                        <div className="title">
                            Now Shopping by
                        </div>
                        <div className="options">
                      <ul className='close'>
                          <li>
                             Color:
                            <span className='blue'>Blue</span>
                          </li>
                          <li><i onClick={()=>setColor(false)} class="fa-solid fa-xmark"></i></li>
                      </ul>
                  </div>
                    </div>
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
               {/* <div className="category">
                  <div className="title">
                     Color
                  </div>
                  <div className="options">
                      <ul className='col'>
                        
                        
                    
                         </ul>
                         </div> 
               </div> */}

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
<div className="row">
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
     <p className="sort">Sort By</p>
      <select id="pad">
          <option value="position" >Position</option>
          <option value="name">Product Name</option>
          <option value="price">Price</option>
          
      </select>
      <i className="fa-solid fa-arrow-up-long"></i>
      </div>
  </div>
  {
      veiw ===true?
      <>
      <div className="flex">
  {data.map((d,idx)=>{
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
                <button className='btn' onClick={() => cart.addOneToCart(d.id)}>{d.btnn}</button>
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
              <span>${d.price}</span>
                
                   </div>
                   
                   

                     
                      
                   </div>
                      );
                  })}
                 
    
 
     </div>
      </>:
      <>
       <Listveiw/>
      </>
  }
  
  
</div>


  </div>  
 
</div>   

   </Container>
         </>:
         <>
         <Women/>
         </>    
    }
    

        </>
    )
}
export default Color;



export const Container=styled.div`
    margin: 0 auto;
    max-width: 1260px;

    .cart{
        display: flex;
        justify-content: center;
        p{
            font-size: 1.5rem;
            text-transform: capitalize;
        }
    }
    .from{
        
        .p{
            display: flex;
            justify-content: space-between;
        }
        button{

            font-size: 1.5rem;
            padding: 5px 15px;
        }
        .remove{
            display: flex;
            justify-content: center;
            button{
                background-color: red;
                font-size:1rem;
            }
        }
    }
  input{
    display: none;
  }
.home{
    padding: 20px 8px;

 

}
    .ul{
        display: flex;
        align-items: center;
        gap: 1rem;
        a{

        
        color: rgb(17 24 39 / 60%);
        }
        a:hover{
            color: black;
        }
        li{
            list-style: none;
            font-weight: 400;
            
        }
        i{
            width: 0.75rem;
            height: 0.75rem;
        }
    }
.content{
    padding: 10px 8px;

}
    .h4{
       
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }
.columns{
    display: flex;
    gap: 2rem;   
}
.row{
   
    gap: 2rem;
}
.size{
    display: flex;
    align-items:center;
    
    gap:0.75rem;
     .grid{
        font-size: 1.3rem;
        padding: .5rem;
        color:rgb(17 24 39 / 30%);
        &:hover{
            color: #000000;
        }
    }
    
    .list{
        font-size: 1.3rem;
        padding: .5rem;
        color:rgb(17 24 39 / 30%);
        &:hover{
            color: #000000;
        }
    }

    
p{
    color: #6b7280;
    font-size: 1.2rem;
    border: 0;
    font-weight: 400;
    padding-top:1.5rem ;
}
   
    @media (max-width: 770px) {
        order: 9999;
        
        
        width: 100%;
       
    }
    @media (max-width:490px){
    i{
    display: none;
    }
    }
  
}
.toolbar{
    display: flex;
    align-items: center;
    
    padding: 0.75rem 0;
    margin-bottom: 0.75rem;
     
    @media (max-width: 770px) {
        order: 9999;
        flex-wrap: wrap;
    }
   
}
.tool{
    display: flex;
    align-items: center;
    gap:0.5rem;
    margin-left:  auto;
.sort{

    font-size: 1.2rem;
    border: none;
    color: #6b7280;
    font-weight: 400;
    @media (max-width: 770px){
        display:none;
    }
}
}
#pad{
    padding: 8px 40px 8px 12px;
}


.shop{
    width: 220px;
    @media (max-width: 770px){
        position: absolute;
    }

    }
  p{
    font-weight: 700;
    font-size: 1.25rem;
    padding: 0.75rem 0;
    margin-bottom: 0.75rem;
    border-bottom: 1.6px solid black
  }
  .category{
    margin-bottom: 4px;

    .close{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  }
  .none{
   
    @media (max-width:770px){
      
       display:none;
        
        
    }
    
  }
.he{
   
    display: flex;
    align-items: center;
    width: 220px;
   svg{
    width: 1.7rem;
    
    display: none;
    @media (max-width:770px){
        display: block;
    }
   }
   
}
  .menu{

    
    input{
        display: none;
    }

    .icon{
        @media (min-width: 700px){
        display: none;
    }
    }
   
 
    @media (max-width:770px){
        visibility: visible;
        position: fixed;
        background-color: rgb(0,0,0,0.7);
        width: 100%;
        
        top: 0%;
        bottom: 0%;
        left:-100%;
        z-index: 1;
        
        flex-wrap: wrap;
        transition: all 0.2s ease-in;
    .icon{
         position: fixed;
         right: -100%;
         top: 5%;
         font-size:2rem;
         color: #ffffff;
         transition: all 0.2s ease-in;
  }
  .black{
       position: fixed;
       width: 24rem;
       max-width: 50%;
       background-color: #ffffff;
       z-index: 1;
       padding: 16px 24px;
       overflow: auto;
       height: 100%;
     
     }

  }


 
  .title{
    font-weight: 500;
    padding: 4px 0;
  }
  .options{
    margin-top:8px;
    margin-bottom: 12px;
    color:rgb(0,0,0,0.7)
   
  }
  .col{
    display: flex;
    gap: 1rem;
    
  }
  li{
        list-style-type: none;
        
    }
  span{
        font-size: 0.875rem;
        font-weight: 300;
        opacity: 0.5;
        margin-left: 0.25rem;
    }
    .li{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #000000;
        box-shadow: 0 0 5px  black;
        border-radius: 50%;
    }
    .ki{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #4800ff;
        box-shadow: 0 0 5px  blue;
        border-radius: 50%;
    }
    .ji{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #82310e;
        box-shadow: 0 0 5px  #82310e;
        border-radius: 50%;
    }
    .hi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #4f4f4f;
        box-shadow: 0 0 5px  #4f4f4f;
        border-radius: 50%;
    }
    .gi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #04fd25;
        box-shadow: 0 0 5px #04fd25;
        border-radius: 50%;
    }
    .fi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #e74d11;
        box-shadow: 0 0 5px  #e74d11;
        border-radius: 50%;
    }
    .di{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #fc13ae;
        box-shadow: 0 0 5px  #fc13ae;
        border-radius: 50%;
    }
    .si{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #f11827;
        box-shadow: 0 0 5px #f11827 ;
        border-radius: 50%;
    }
    .ai{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #f7eeee;
        box-shadow: 0 0 5px  black;
        border-radius: 50%;
    }
    .pi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #fff30b;
        box-shadow: 0 0 5px  #fff30b;
        border-radius: 50%;
    }
    .oi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ii{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ui{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .yi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ti{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ri{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ei{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .wi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .qi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mi{
        height: 1.6rem;
        width:  1.6rem;
        background-color: rgb(243 244 246);
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

 #checks:checked ~ .menu{
    left: 0%;

    .icon{
        right: 40%;
    }
   


   
  }
  
.flex{
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
   @media (max-width: 770px){
    left: 0%;
    position: relative;
   }
   

  
    
}
.div:hover .hey {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.671); 
    @keyframes colors {
        from{
            opacity: 0;
            transform:translateY(50px);
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    } 
    animation: colors .2s linear;
}
.div:hover .btn{
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255,255,255,0.9);
    @keyframes appear{
      from{
        opacity: 0;
        transform: translateY(50px);
      }
      to{
        opacity: 1;
        transform: translateY(0px);
      } 
    }
    animation: appear .1s linear;
}
.div:hover .like{
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255,255,255);
   
}
.div:hover .weight{
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255,255,255);
   
}
.div{

 /* width: 320px; */
 /* height: 370px; */

@media (min-width: 400px){
    width:220px;
    height: auto;
}
 @media (min-width: 850px){
    width: 250px;
    height: auto;
 }
@media (min-width: 1200px){
    width: 310px;
    height: auto;
}
 

 .sizes{
    position: absolute;  
   
 }
 .siz{
        display: flex;
        justify-content: center;
        gap: 1rem;

        li{
            list-style: none;
            box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
            border-radius: 50%;
            height: 1.6rem;
            width:  1.6rem;
            text-align: center;
            background-color: rgb(243 244 246);
        }
    }
.cols{
    margin-top: 2rem;
    
   
}

.hey{
    position:absolute;
    cursor: pointer;
    opacity: 0;
    display: flex;
    justify-content: center;
    width: 320px;
    height:5rem;
    bottom: 0%;
    padding: 20px 0;
    z-index: 1;
  
    @media (min-width: 400px){
    width:220px;
    
}
 @media (min-width: 850px){
    width: 250px;
   
 }
@media (min-width: 1200px){
    width: 310px;
   
}
}

.color{
    display: flex;
    justify-content: center;
    gap: 1rem;

    li{
        list-style: none;
    }

    .red{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #f11827;
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
    }
    .pink{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #ff0066;
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
    }
    .green{
        height: 1.6rem;
        width:  1.6rem;
        background-color: #48ff00;
        box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
        border-radius: 50%;
    }
}


 .productcard{

   
    column-gap: 20px;
    background-color: #faf7f7;
   
}

.productimage{
    position: relative;
    overflow: hidden;
    
    
    }
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode:multiply;
   
}
.btn{
    position: absolute;
    bottom: 50%;
    left: 25%;
   
    padding: 10px;
    width: 50%; 
    text-transform: uppercase;
    border: none;
    outline: none;
    background-color: white;
    border-radius: 5px;
    
    cursor: pointer;
    opacity: 0;
    font-weight: 700;
    @media (max-width: 850px){
    width: auto;
    left: 30%;
   }

}


.like{ 
    position: absolute;
    transform: translateX(-50%);
    border: none;
    outline: none;
    transition: 0.5s;
    cursor: pointer;
    opacity: 0;
    right: 2%;
    top: 5%;
    font-size: 1.4rem;
    color: gray;
    &:hover{
        color: black;
    }
   
}
.weight{ 
    position: absolute;
    transform: translateX(-50%);
    border: none;
    outline: none;
    transition: 0.5s;
    cursor: pointer;
    opacity: 0;
    right: 1%;
    top: 15%;
    font-size: 1.25rem;
    color: gray;
    &:hover{
        color: black;
    }
}
.productinfo{
   
  
    padding-top:10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    h2:hover{
        text-decoration: underline;
        cursor: pointer;

    }
    
}

h2{
    text-transform: capitalize;
    font-size: 1.1rem;
    font-weight: 500;
}

span{
    font-weight: 400;
    color: #383e48;
} 

}

`