import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardContext } from '../../cart/CartContext';
import { useContext } from 'react';

const data=[
  {
    id:11,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/9935963157b6c43f963afdd068a44aa4/m/b/mb01-blue-0_1.jpg",
    btnn:"Add to cart",
    like:"Joust Duffle Bag On Sale 2",
    price:"$34.00"
  },
  {
    id:12,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/9935963157b6c43f963afdd068a44aa4/w/g/wg02-bk-0.jpg",
    btnn:"Add to cart",
    like:"didi sport watch",
    price:"$92.00"
  },
  {
    id:13,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/1974c3cab1e7ec248d03121d6f6496b0/w/g/wg03-gr-0.jpg",
    btnn:"Add to cart",
    like:"clamber watch",
    price:"$54.00"
  },
  {
    id:14,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/1974c3cab1e7ec248d03121d6f6496b0/w/g/wg01-bk-0.jpg",
    btnn:"Add to cart",
    like:"bolo sport watch",
    price:"$49.00"
  },
  {
    id:15,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/1974c3cab1e7ec248d03121d6f6496b0/w/g/wg01-bk-0.jpg",
    btnn:"Add to cart",
    like:"didi sport watch",
    price:"$34.00"
  },
  {
    id:16,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/1974c3cab1e7ec248d03121d6f6496b0/w/g/wg01-bk-0.jpg",
    btnn:"Add to cart",
    like:"didi sport watch",
    price:"$34.00"
  },
  {
    id:17,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/1974c3cab1e7ec248d03121d6f6496b0/w/g/wg03-gr-0.jpg",
    btnn:"Add to cart",
    like:"sport watch",
    price:"$36.00"
  },
  {
    id:18,
    img:"https://breeze.swissupdemo.com/media/catalog/product/cache/9935963157b6c43f963afdd068a44aa4/m/b/mb01-blue-0_1.jpg",
    btnn:"Add to cart",
    like:"Joust Duffle Bag On Sale 2",
    price:"$34.00"
  },
]

const Sliders = () => {

  const cart=useContext(CardContext)
  
   const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1388,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 690,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
       
 <>
      <Section>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index}>  
                <Div>
                  <div className="productcard">
                    <div className="productimage">

                      {/* {cart.getProductQuantity(d.id)>0 ?
                      <>
                       
                       
                      </>:
                      <button className='btn' onClick={()=>cart.addOneToCart(d.id)}>{d.btnn}</button>
                      } */}
                      <img src={d.img} alt="" />
                      <button className='btn'>{d.btnn}</button>
                      <button className='like'><i className="fa-regular fa-heart"></i></button>
                      <button className="weight"><i className="fa-solid fa-scale-balanced"></i></button>
                    </div>
                   
                    <div className="productifo">
                      <h2>{d.like}</h2>
                      <span>{d.price}</span>
                    </div>
                  </div>
                </Div>
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    </>
    )
}
export default Sliders;


export const Section=styled.div`
   
   width: 80%;
   margin: auto;
 

   
   
    &:hover{
       cursor: pointer;
    }
  .slick-slide > div{
    margin: 0 10px ;

  }
  .slick-dots li button:before{
    font-size: 1rem;
    color: black;
    opacity: 1;
  }

  .slick-dots li.slick-active button:before {
    opacity: .75;
    color: #b8b2b2;
    border:  black;
}
.slick-prev:before, .slick-next:before {
  color: black;
  font-size: 1.5rem;
}
 
    

`

export const Div=styled.div`

.productimage{
  background-color:#faf7f7;
}

 .productcard{

   
    column-gap: 20px;
   
   
}
.productcard:hover .btn{
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
:hover .like{
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255,255,255);
   
}
:hover .weight{
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255,255,255);
   
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
    bottom: 40%;
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
.productifo{
    width: 275px;
    height: 56px;
    padding-top:10px;
    display: flex;
    justify-content: space-between;

    
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



`