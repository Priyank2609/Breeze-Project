import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import { CardContext } from '../cart/CartContext';
import Listveiw from '../compenents/Listveiw';
import Color from '../compenents/Color';
import ProductDataProvider, { useData } from '../cart/ProductData';
import Shop from '../compenents/Shop';

import Menubar from '../compenents/Menubar';

export const data=[
    {
      id:1,
      img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh12-green_main_1.jpg",
      btnn:"Add to cart",
      like:"Erika Running Short",
      color:["black","gray",],
      price:45.00
    },
    {  
      id:2,
      img:"https://breeze.swissupdemo.com/media/catalog/product/cache/3406ad5e0f20394a25ade9a969fb1fe2/w/s/wsh11-blue_main_1.jpg",
      btnn:"Add to cart",
      like:"Ina Compression Short",
      color:["black","gray"],
      price:49.00
    },
    {  
      id:3,
      img:"https://breeze.swissupdemo.com/media/catalog/product/cache/3406ad5e0f20394a25ade9a969fb1fe2/w/s/wsh10-black_main_1.jpg",
      btnn:"Add to cart",
      like:"Ana Running Short",
      color:["black","gray","green","blue","brown"],
      price:40.00
    },
    {  
        id:4,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh09-gray_main_1.jpg",
        btnn:"Add to cart",
        like:"Mimi All-Purpose Short",
        price:44.00
      },
      {  
        id:5,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh08-purple_main_1.jpg",
        btnn:"Add to cart",
        like:"Sybil Running Short",
        price:44.00
      },
      {  
        id:6,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh07-black_main_1.jpg",
        btnn:"Add to cart",
        like:"Echo Fit Compression Short",
        color:["green","blue","brown"],
        price:24.00
      },
      {  
        id:7,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh06-gray_main_1.jpg",
        btnn:"Add to cart",
        like:"Angel Light Running Short",
        price:42.0
      },
      {  
        id:8,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh05-blue_main_1.jpg",
        btnn:"Add to cart",
        like:"Bess Yoga Short",
        price:28.00
      },
      {  
        id:9,
        img:"https://breeze.swissupdemo.com/media/catalog/product/cache/a3063d49e258086bae41b9f4c66f61c4/w/s/wsh04-black_main_1.jpg",
        btnn:"Add to cart",
        like:"Artemis Running Short",
        color:["green","blue","brown"],
        price:45.00
      }
   
]

export const getData=(id)=>{
   const product=data.find((db)=>db.id===id)
   return product;
}

const Women = () => {
   

return(
        <ProductDataProvider> 
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
      
           <Shop/>
         <div className="row">
            <Menubar/>
  
         </div>


        </div>  
 
     </div>   

   </Container>
            
        </ProductDataProvider>
    )
}
export default Women;


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
        cursor: pointer;
        &:hover{
            color: #000000;
        }
    }
    
    .list{
        font-size: 1.3rem;
        padding: .5rem;
        color:rgb(17 24 39 / 30%);
        cursor: pointer;
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