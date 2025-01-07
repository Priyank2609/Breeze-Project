import React, { useEffect, useState,useRef } from 'react';
import { NavLink, useLoaderData,useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { addProductToCart ,addToCart,getTotalCost} from '../slice/addSlice';
import styled from 'styled-components';
import { addToWishlist } from '../slice/wishlistSlice';
// import { datas } from '../api/Api';
import axios from 'axios';






const Products = () => {

  const formvalue=useRef()
  const totalCosts = useSelector((state) => state.carts.totalCost);
  const carts = useSelector((state) => state.products.productList);
  const [veiw,setVeiw]=useState(true)
  
  const dispatch = useDispatch();
  const[currPage,setCurrPage]=useState(1)
  const recPage=7
  const lastIndex=currPage * recPage
  const firstIndex=lastIndex - recPage
  const records=carts.slice(firstIndex,lastIndex)
  const npages=Math.ceil(carts.length/recPage)
  const numbers=[...Array(npages+1).keys()].slice(1)
     const {userInfo}=useSelector((state)=>state.auth)
 
const navigate=useNavigate()
  function changePage(id) {
    setCurrPage(id)
  }
  // function prePage() {
  //   if(currPage!==1){
  //     setCurrPage(currPage - 1)
  //   }
  // }
  function nextPage() {
    if(currPage!==npages){
      setCurrPage(currPage + 1)
    }
    
  }



const wishHandler=async(id)=>{
  if(userInfo){
   {
             axios.post(`http://localhost:2000/wish/`,{prodId:id},
             {
              withCredentials:true
             })
           .then((res)=>{
            console.log(res.data)
           dispatch(addToWishlist( res.data.prodId ))
            
           })
        } 
      }else{
        navigate("/signIn")
      } 
      }
      

  // const wishHandler=(carts)=>{
  //   dispatch(addToWishlist(carts))
  // }
  return (
    <>
     
      
       <div className="flex">
       
        {records.map((product, index) => (
          <div className="div" key={index}>
            <div className="productcard">
              <div className="productimage">
                <img src={product.img[0]} alt="" />
                {/* {console.log("product",product)} */}
                <button  className="like" onClick={()=>wishHandler(product._id)} >
                  <i  className="fa-regular fa-heart"></i>
                </button>
                
                <button className="weight">
                  <i className="fa-solid fa-scale-balanced"></i>
                </button>
                <NavLink to={`/addtocart/${product._id}`}>
                  <button
                    className="btn"
                    onClick={() => dispatch(addToCart(product._id))}
                  >
                    {product.btnn}
                  </button>
                </NavLink>
                <div className="hey">
                  <div className="sizes">
                    <ul className="siz">
                      <li>28</li>
                      <li>29</li>
                      <li>30</li>
                      <li>31</li>
                      <li>32</li>
                    </ul>
                  </div>
                  <div className="cols">
                    <ul className="color">
                      <li className="red"></li>
                      <li className="pink"></li>
                      <li className="green"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="productinfo">
                <h2>{product.like}</h2>
                <span>${product.price}.00</span>
              </div>
            </div>
          </div>
        ))}
      </div>
     
     
              <Num>
                <div className="numbers">
                    <ul>
                       
                        {/* <li onClick={changePage}>2</li>
                        <li onClick={changePage}>3</li>
                        <li onClick={changePage}>4</li> */}
                        {numbers.map((n,i)=>{
                         return(
                           <li className={`${currPage==n?"":""}`} onClick={()=>changePage(n)}>{n}</li>
                         )
                          
                         
                        })}
                        <i className="fa-solid fa-arrow-right-long" onClick={nextPage}></i>
                    </ul>
                 </div>
                 
               </Num>


    </>
  );
};

export default Products;

 export const Num=styled.div`
  display: flex;
  .fa-arrow-right-long{
    color: gray;
    font-size: 1.3rem;
  }
  ul {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
   
   li{
     list-style: none;
     padding: .25rem .5rem;

    
}
 li:hover{
     background-color: rgb(229, 231 ,235 ,.8) ;
      cursor: pointer;
     }
}

 `
