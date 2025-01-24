

import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { useCart } from '../../cart/CartContext';
import { getData } from "../../productData";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  deleteFromCart,
  findQuantity,
  getTotalCost,
  removeProduct,
} from "../../slice/addSlice";
import { logout } from "../../slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { deleteToWishlist } from '../../slice/wishlistSlice';
import { useEffect } from "react";
import { deleteToWishlist } from "../../slice/wishlistSlice";
const Navbar = ({ toggle }) => {
  // const contextData=useCart();
  // const cart=useCart();

  // const totalPrice=cart.getTotalCost();
  const carts = useSelector((state) => state.carts.cart);
  console.log(carts);
  const navbar = useSelector((state) => state.carts.navbar);

  const number = carts.reduce((ac, el) => ac + el.quantity, 0);

  const totalCosts = useSelector((state) => state.carts.totalCost);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(totalCosts);

  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  // const cart=useSelector((state)=>state.cart)
  console.log(carts);

  const wishList = useSelector((state) => state.wish.wishlistItems);

  // cost[show,setShow]=useState(false)
  // const handleClose=()=>setShow(false)

  // const handleShow=()=>setShow(true)

  const logoutHandler = async () => {
    {
      axios
        .post(
          "http://localhost:2000/users/logout",
          {},
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          dispatch(logout());
          navigate("/signIn");
        });
    }
  };
  useEffect(() => {});

  const delHandler = async (id) => {
    {
      axios
        .delete(`http://localhost:2000/wish/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          dispatch(deleteToWishlist(id));
        });
    }
  };

  return (
    <>
      <Nav>
        <Drawer onClick={toggle}>
          <i className="fa-solid fa-bars"></i>
        </Drawer>

        <a href="http://localhost:5173/">
          {" "}
          <img
            src="https://breeze.swissupdemo.com/static/version1714766523/frontend/Swissup/breeze-evolution/en_US/images/logo.svg"
            alt=""
          />
        </a>
        <div className="order">
          <Ul>
            <a href="/new">
              <li>What's New</li>
            </a>
            <li>
              <a href="/women">
                Women <i className="fa-solid fa-angle-down"></i>
              </a>
              <ul className="dropdown">
                <li className="right">
                  <a href="">Tops</a>
                  <i className="fa-solid fa-angle-right"></i>
                  <ul className="side">
                    <li>Jackets</li>
                    <li>Hoodies& Sweatshirts</li>
                    <li>Tees</li>
                    <li>Bras&Tanks</li>
                  </ul>
                </li>
                <li className="bottom">
                  <a href="">Bottoms</a>
                  <i className="fa-solid fa-angle-right"></i>

                  <ul className="side">
                    <li>Pants</li>
                    <li>Shorts</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/men">
                Men <i className="fa-solid fa-angle-down"></i>
              </a>

              <ul className="dropdown">
                <li className="right">
                  <a href="">Tops</a>
                  <i className="fa-solid fa-angle-right"></i>

                  <ul className="side">
                    <li>Jackets</li>
                    <li>Hoodies& Sweatshirts</li>
                    <li>Tees</li>
                    <li>Bras&Tanks</li>
                  </ul>
                </li>
                <li className="bottom">
                  <a href="">Bottoms</a>
                  <i className="fa-solid fa-angle-right"></i>

                  <ul className="side">
                    <li>Pants</li>
                    <li>Shorts</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="gear">
                Gear <i className="fa-solid fa-angle-down"></i>
              </a>

              <ul className="dropdown">
                <li>
                  {" "}
                  <a href="">Bags</a>
                </li>
                <li>
                  <a href="">Fitness Equipment</a>
                </li>
                <li>
                  <a href="">Watches</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/training">
                Training <i className="fa-solid fa-angle-down"></i>
              </a>

              <ul className="dropdown">
                <li>
                  {" "}
                  <a href="">Video Download</a>
                </li>
              </ul>
            </li>
            <a href="/sale">
              <li>Sale</li>
            </a>
          </Ul>
        </div>

        <Li>
          <div className="inp">
            <input type="text" id="search" placeholder="Serach entire store" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="ll">
            <input type="checkbox" id="k" />
            <label htmlFor="k">
              <i className="fa-regular fa-circle-user"></i>
            </label>
            <ul className="hi">
              {userInfo ? (
                <>
                  <li>{userInfo.firstname}</li>
                  <Link to="/signIn">
                    <li onClick={logoutHandler}>logout</li>
                  </Link>
                </>
              ) : (
                <>
                  <NavLink to="/signIn">
                    <li>sign in</li>
                  </NavLink>
                  <NavLink to="/account">
                    <li>create account</li>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          {wishList && wishList.length > 0 ? (
            <>
              <div className="ll">
                <input type="checkbox" id="l" />
                <label htmlFor="l">
                  <i className="fa-regular fa-heart"></i>
                </label>
                <ul className="hy">
                  <h4>My Wish List</h4>
                  <p>Last Added Items</p>
                  <div className="pika">
                    {wishList.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <div className="add">
                            <div className="image">
                              <img src={item.img[0]} alt="" />
                            </div>
                            <div className="items">
                              <a href="">
                                <h4>{item.like}</h4>
                              </a>

                              <div className="del">
                                <p className="p"> ${item.price}.00</p>
                                <i
                                  className="fa-regular fa-trash-can"
                                  onClick={() => delHandler(item._id)}
                                ></i>
                              </div>
                              {/* <div className="remove">
                        <button onClick={()=>{dispatch(addProductToCart(item._id)) & dispatch(getTotalCost())}}
                            >+</button>
                        <button onClick={()=>{dispatch(removeProduct(item._id))& dispatch(getTotalCost())}}>-</button>
                        </div> */}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="ll">
                <input type="checkbox" id="l" />
                <label htmlFor="l">
                  <i className="fa-regular fa-heart"></i>
                </label>
                <ul className="hy">
                  <h4>My Wish List</h4>
                  <p>Last Added Items</p>
                  <li>You have no items in your wish list.</li>
                </ul>
              </div>
            </>
          )}
          {/* <div className="ll">
                <input type="checkbox" id='l' />
                <label htmlFor="l">
                <i  className="fa-regular fa-heart"></i></label>
                <ul className='hy'>
                    <h4>My Wish List</h4>
                    <p>Last Added Items</p>
                    <li>You have no items in your wish list.</li>
                </ul>
                </div> */}

          <div className="div">
            <input type="checkbox" id="ki" />
            <label htmlFor="ki">
              <p>
                <i className="fa-solid fa-bag-shopping"></i>
              </p>
            </label>

            <div className="like">
              <ul>
                <div className="icon">
                  <h4>My Cart</h4>
                  <input type="checkbox" id="ki" />
                  <label htmlFor="ki">
                    <i className="fa-solid fa-xmark"></i>
                  </label>
                </div>

                {number === 0 ? (
                  localStorage.setItem("cost", JSON.stringify(0)) || (
                    <>
                      <li>You have no items in your shopping cart.</li>
                    </>
                  )
                ) : (
                  <>
                    <div className="price">
                      <p>Cart Subtotal</p>
                      <p> ${totalCosts}.00</p>
                    </div>
                    <button className="btn">Proceed to Checkout</button>

                    <div className="pika">
                      {carts.map((item, idx) => {
                        const list = getData(item._id);

                        return (
                          <li key={idx}>
                            <div className="add">
                              <div className="image">
                                <img src={list.img[0]} alt="" />
                              </div>
                              <div className="items">
                                <a href="">
                                  <h4>{list.like}</h4>
                                </a>

                                <p className="p"> ${list.price}.00</p>
                                <div className="del">
                                  <div className="fai">
                                    <p className="qty">Qty </p>

                                    <p>
                                      {" "}
                                      {() =>
                                        dispatch(findQuantity(item._id))
                                      }{" "}
                                      {item.quantity}
                                    </p>
                                  </div>
                                  <i
                                    className="fa-regular fa-trash-can"
                                    onClick={() =>
                                      dispatch(deleteFromCart(item._id)) &
                                      dispatch(getTotalCost())
                                    }
                                  ></i>
                                </div>
                                <div className="remove">
                                  <button
                                    onClick={() => {
                                      dispatch(addProductToCart(item._id)) &
                                        dispatch(getTotalCost());
                                    }}
                                  >
                                    +
                                  </button>
                                  <button
                                    onClick={() => {
                                      dispatch(removeProduct(item._id)) &
                                        dispatch(getTotalCost());
                                    }}
                                  >
                                    -
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </Li>
      </Nav>
    </>
  );
};
export default Navbar;

export const Drawer = styled.button`
  all: unset;
  font-size: 1.6rem;
  display: grid;

  @media (min-width: 640px) {
    display: none;
  }
`;
export const Nav = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  position: relative;
  list-style-type: none;
  padding: 20px 8px;
  position: relative;

  @media (min-width: 640px) {
    .inp {
      display: flex;
      align-items: center;
      border: 1.5px solid rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      background-color: rgb(243 244 246);

      input {
        display: block;
        outline: none;
      }
      i {
        color: grey;
      }
    }
  }

  img {
    padding: 0 10px;
    cursor: pointer;

    @media (max-width: 430px) {
      width: 100%;
      height: 100%;
    }
  }

  a {
    text-decoration: none;
  }
  i {
    padding-right: 8px;

    /* opacity: 0.9; */
  }

  .order {
    margin: auto;
    @media (max-width: 640px) {
      display: none;
    }
    @media (min-width: 640px) and (max-width: 1023px) {
      order: 9999;

      width: 100%;
    }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    flex-wrap: wrap;
  }
`;
    

export const Ul = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    text-decoration: none;
  }

  li {
    /* font-size: 1rem; */

    font-weight: 600;
    padding: 4px 4px;
    color: rgb(0 45 87);
    a {
      color: rgb(0 45 87);
    }

   
    &:hover {
      cursor: pointer;
      background-color: #f2f2f2;
      border-radius: 8%;
    }
  }
  @media (min-width: 640px) and (max-width: 1023px) {
    margin-left: 0.5rem;
    display: flex;
    direction: ltr;

    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  li ul.dropdown {
    list-style: none;
    margin-top: 0.4rem;
    width: 13rem;
    /* right: auto; 
    left: 9999px; 
    top: 9999px; */
    background-color: #fff;
    position: absolute;
    z-index: 1;
    box-shadow: 0 2px 3px black;
    border-radius: 3%;
    display: none;
    a {
      color: rgb(0 45 87);
      font-weight: 400;
    }
  }

  li:hover ul.dropdown {
    display: block;
  }
  li:hover ul.dropdown li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
  }
  li ul.dropdown li i {
    font-size: 0.7rem;
    padding-right: 1px;
  }
  ul.side {
    display: block;
    color: rgb(0 45 87);
    font-size: 1rem;
    font-weight: 400;
    width: 13rem;
  }
  li ul.side {
    position: absolute;
    right: 0%;
    display: none;
    width: 10%;
    top: 10%;
    z-index: 1;

    border-radius: 0.25rem;
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1),
      0 1px 6px rgba(0, 0, 0, 0.05);
  }
  ul.side li {
    font-weight: 400;
    width: 13rem;

    background-color: white;
    border-radius: 0.15rem;
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1),
      0 1px 6px rgba(0, 0, 0, 0.05);
  }

  .right:hover ul.side {
    display: block;

    li:hover {
      background-color: #f2f2f2;
    }
  }

  .bottom ul.side li {
    font-weight: 400;
    width: 13rem;

    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1),
      0 1px 6px rgba(0, 0, 0, 0.05);
  }
  .bottom:hover ul.side {
    display: block;
    li:hover {
      background-color: #f2f2f2;
    }
  }
`;

export const Li = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  input {
    width: 200px;
    height: 43px;
    /* outline-style: none; */
    border: none;
    background-color: #faf7f7;
    text-align: center;

    @media (max-width: 640px) {
      display: none;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }

  .btn {
    width: 100%;
    padding: 0.675rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid rgb(0 0 0 / 0%);
    border-radius: 0.25rem;
    background-color: black;
    color: white;
  }
  .add {
    width: 285px;
    /* height: 110px; */
    display: flex;
    margin-top: 16px;
    padding-top: 16px;
    gap: 0.75rem;

    .image {
      background-color: #faf7f7;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
        mix-blend-mode: multiply;
      }
    }

    .items {
      .del {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.25rem;
        i {
          color: rgb(17 24 39 / 20%);
          font-size: 1rem;
        }
        i:hover {
          color: gray;
          cursor: pointer;
        }
      }
      .fai {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        p {
          font-size: 0.85rem;
          color: rgb(17 24 39 / 60%);
        }
      }
      .p {
        color: black;
      }
      p {
        padding-top: 0.6rem;
      }
      .qty {
        color: rgb(17 24 39 / 60%);
        font-size: 0.85rem;
      }
      span {
        padding-top: 0.8rem;
      }
      h4 {
        padding: 3px 0;
        font-weight: 500;
        color: #2a2828;
      }
    }
  }

  .price {
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }

  i {
    font-size: 1.3rem;
    padding-top: 5px;
    padding-left: 2px;

    cursor: pointer;
  }

  .hi {
    overflow: hidden;

    position: absolute;
    right: 0%;

   display: none;
  }
  .ll input:checked ~ .hi {
    list-style: none;
    margin-top: 0.4rem;
    text-transform: capitalize;
    padding: 0.7rem;
    max-height: 300px;
    right: 30%;
   display: block;

    font-weight: 400;
    width: 10rem;
    transform: scale(1);
    z-index: 1;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1),
      0 1px 6px rgba(0, 0, 0, 0.05);

    li:hover {
      background-color: #f2f2f2;
      border-radius: 4%;
    }
    li {
      padding: 10px 5px;
    }
  }
  input {
    display: none;
  }

  .hy {
    overflow: hidden;

    position: absolute;
    right: 15%;

   display: none;
  }
  .ll input:checked ~ .hy {
    list-style: none;
    margin-top: 0.4rem;

    padding: 0.7rem;
    max-height: 500px;

    display: block;

    font-weight: 400;
    width: 20rem;
    transform: scale(1);
    z-index: 1;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1),
      0 1px 6px rgba(0, 0, 0, 0.05);

    li {
      font-weight: 500;
      padding: 10px 5px;
    }
    h4 {
      padding: 10px 5px;
      font-weight: 700;
    }
    p {
      padding: 10px 5px;
    }
  }
  ul {
    position: absolute;
    left: auto;
  }
  .pika {
    padding: 0 6px 4px 6px;
    min-height: 10rem;
    max-height: 25rem;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .div input:checked ~ .like ul {
    z-index: 1;
    background-color: white;
    width: 20rem;
    max-width: 90vw;
    display: block;
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1),
      0 1px 6px rgba(0, 0, 0, 0.05);

    padding: 0.75rem 1rem;
  }
  .div {
    .icon {
      display: flex;
      justify-content: space-between;

      i {
        color: gray;
      }
    }
    .like {
      ul {
        overflow: hidden;

        position: absolute;

        right: 0%;
        display: none;

        li {
          list-style: none;
          margin: 0.5rem;
        }
      }
    }
  }

  .remove {
    display: flex;
    gap: 1rem;

    button {
      margin-top: 1rem;
      width: 2rem;
      border: none;
      font-size: 1.5rem;
    }

    button:hover {
      border: 1px solid green;
    }
  }
`;

