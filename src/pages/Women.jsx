import React, { useContext, useState } from 'react';
import styled from 'styled-components'
// import { CardContext } from '../cart/CartContext';
import Listveiw from '../compenents/Listveiw';
// import Color from '../compenents/Color';
// import ProductDataProvider, { useData } from '../cart/ProductData';
import Shop from '../compenents/Shop';

import Menubar from '../compenents/Menubar';
import { NavLink } from 'react-router-dom';
import RecentlyProd from '../compenents/RecentlyProd';

    


const Women = () => {
  return (
    // <ProductDataProvider>
    <Container>
      <div className="home">
        <ul className="ul">
          <NavLink to="/">
            <li>
              <i className="fa-solid fa-house"></i>
            </li>
          </NavLink>
          <i className="fa-solid fa-angle-right"></i>
          <li>Women</li>
        </ul>
      </div>

      <div className="content">
        <div className="h4">
          <h4>Women</h4>
        </div>
        <div className="columns">
          <Shop />
          <div className="row">
            <Menubar />
          </div>
        </div>

        <RecentlyProd />
      </div>
    </Container>

    // </ProductDataProvider>
  );
}
export default Women;


export const Container = styled.div`
  margin: 0 auto;
  max-width: 1260px;

  .cart {
    display: flex;
    justify-content: center;
    p {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }

  .from {
    .p {
      display: flex;
      justify-content: space-between;
    }
    button {
      font-size: 1.5rem;
      padding: 5px 15px;
    }
    .remove {
      display: flex;
      justify-content: center;
      button {
        background-color: red;
        font-size: 1rem;
      }
    }
  }
  input {
    display: none;
  }
  .home {
    padding: 20px 8px;
  }
  .ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    a {
      color: rgb(17 24 39 / 60%);
    }
    a:hover {
      color: black;
    }
    li {
      list-style: none;
      font-weight: 400;
    }
    i {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
  .content {
    padding: 10px 8px;
  }
  .h4 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .columns {
    display: flex;
    gap: 2rem;
  }
  .row {
    gap: 2rem;
  }
  .size {
    display: flex;
    align-items: center;

    gap: 0.75rem;
    .grid {
      font-size: 1.3rem;
      padding: 0.5rem;
      color: rgb(17 24 39 / 30%);
      cursor: pointer;
      &:hover {
        color: #000000;
      }
    }

    .list {
      font-size: 1.3rem;
      padding: 0.5rem;
      color: rgb(17 24 39 / 30%);
      cursor: pointer;
      &:hover {
        color: #000000;
      }
    }

    p {
      color: #6b7280;
      font-size: 1.2rem;
      border: 0;
      font-weight: 400;
      padding-top: 1.5rem;
    }

    @media (max-width: 770px) {
      order: 9999;

      width: 100%;
    }
    @media (max-width: 490px) {
      i {
        display: none;
      }
    }
  }
  .toolbar {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    padding: 0.75rem 0;
    margin-bottom: 0.75rem;

    @media (max-width: 770px) {
      order: 9999;
      flex-wrap: wrap;
    }
  }
  .tool {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
    .sort {
      font-size: 1.2rem;
      border: none;
      color: #6b7280;
      font-weight: 400;
      @media (max-width: 770px) {
        display: none;
      }
    }
  }
  #pad {
    padding: 8px 40px 8px 12px;
  }

  .shop {
    width: 220px;
    @media (max-width: 770px) {
      position: absolute;
    }
  }
  p {
    font-weight: 700;
    font-size: 1.25rem;
    padding: 0.75rem 0;
    margin-bottom: 0.75rem;
    border-bottom: 1.6px solid black;
  }
  .category {
    margin-bottom: 4px;
  }

  .he {
    display: flex;
    align-items: center;
    width: 220px;
    svg {
      width: 1.7rem;

      display: none;
      @media (max-width: 770px) {
        display: block;
      }
    }
  }
  .menu {
    input {
      display: none;
    }

    .icon {
      @media (min-width: 700px) {
        display: none;
      }
    }

    @media (max-width: 770px) {
      visibility: visible;
      position: fixed;
      background-color: rgb(0, 0, 0, 0.7);
      width: 100%;

      top: 0%;
      bottom: 0%;
      left: -100%;
      z-index: 1;

      flex-wrap: wrap;
      transition: all 0.2s ease-in;
      .icon {
        position: fixed;
        right: -100%;
        top: 5%;
        font-size: 2rem;
        color: #ffffff;
        transition: all 0.2s ease-in;
      }
      .black {
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

    .title {
      font-weight: 500;
      padding: 4px 0;
    }
    .options {
      margin-top: 8px;
      margin-bottom: 12px;
      color: rgb(0, 0, 0, 0.7);
    }
    .col {
      display: flex;
      gap: 1rem;
    }
    li {
      list-style-type: none;
    }
    span {
      font-size: 0.875rem;
      font-weight: 300;
      opacity: 0.5;
      margin-left: 0.25rem;
    }
   
   
    
 
    
    
    
  }

  #checks:checked ~ .menu {
    left: 0%;

    .icon {
      right: 40%;
    }
  }

 
/*   
  .div:hover .btn {
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    @keyframes appear {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    animation: appear 0.1s linear;
  }
  .div:hover .like {
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255, 255, 255);
  }
  .div:hover .weight {
    opacity: 1;
    cursor: pointer;
    background-color: rgba(255, 255, 255);
  }
  
 

  h2 {
    text-transform: capitalize;
    font-size: 1.1rem;
    font-weight: 500;
    color: #000000;
  }
  a {
    text-decoration: none;
  } 

  /span {
    font-weight: 400;
    color: #383e48;
  } */
`;