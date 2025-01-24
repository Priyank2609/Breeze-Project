import React, { useRef, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getData } from '../productData';
import {useSelector,useDispatch} from "react-redux"
import { addProductToCart, addToCart, deleteFromCart, findQuantity, getNav, getPopUp, getTotalCost, removeProduct} from "../slice/addSlice";
import styled from 'styled-components';
import { Buttons ,theme} from '../styles/Theme';
import Women from './Women';
import Slider from "react-slick";

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => (props.col ? props.col : "black")};
  height: 1.6rem;
  width: 1.6rem;

  border: 2px solid grey;
  border-radius: 50%;

  cursor: pointer;
`;

const AddToCart = () => {
  const { id } = useParams();

  const formColor = useRef(null);
  const dispatch = useDispatch();
  const lists = getData(id);

  const [veiw, setVeiw] = useState(true);
  const carts = useSelector((state) => state.products.productList);
  const data = carts.filter((el) => el._id === id);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formColor);

    dispatch(getTotalCost()), dispatch(getPopUp()), dispatch(getNav());
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Add>
        <div className="home">
          <ul className="ul">
            <NavLink to="/">
              <li>
                <i className="fa-solid fa-house"></i>
              </li>
            </NavLink>
            <i className="fa-solid fa-angle-right"></i>
            <NavLink to="/women">
              {" "}
              <li>Women</li>
            </NavLink>
          </ul>
        </div>

        <li>
          <div className="add">
            <div className="images">
              <div className="slider-container">
                <Slider
                  {...settings}
                  customPaging={(i) => {
                    return (
                      <div className="small-image">
                        <img
                          src={lists.img[i]}
                          alt=""
                          style={{
                            width: "110px",
                            height: "110px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    );
                  }}
                  dotsClass="slick-dots custom-slider"
                >
                  <div className="image">
                    <img src={lists.img[0]} alt="" />
                  </div>
                  <div className="image">
                    <img src={lists.img[1]} alt="" />
                  </div>
                  <div className="image">
                    <img src={lists.img[2]} alt="" />
                  </div>
                </Slider>
              </div>

              <div className="small">
                {/* <div className="small-img">
                    <img src={lists.img[0]} alt="" />   
                    </div>
                     <div className="small-img">
                    <img src={lists.img[1]} alt="" />                   
                    </div> */}
                {/* <div className="small-img">
                    <img src={lists.img[2]} alt="" />
                    
                    </div> */}
              </div>
            </div>
            <div className="align-items">
              <h3>{lists.like}</h3>
              <span className="stock">In Stock</span>
              <p>Be the first to review this product</p>
              <p className="p"> ${lists.price}.00</p>

              <hr />

              <div className="siz">
                <div className="title">Size</div>
                <div className="options">
                  <ul className="col">
                    <li className="oi">XS</li>
                    <li className="ii">S</li>
                    <li className="ui">M</li>
                    <li className="yi">L</li>
                    <li className="ti">XL</li>
                  </ul>
                </div>
              </div>

              <div className="title">Color</div>
              <form onSubmit={handleSubmit} action="" ref={formColor}>
                <div className="options">
                  <div className="col">
                    {
                      // console.log("data=",data[0].color)

                      data[0].color.map((e, idx) => {
                        return (
                          <>
                            <Input
                              type="radio"
                              name="color"
                              key={idx}
                              value={e}
                              col={e}
                              required
                            />
                          </>
                        );
                      })
                    }
                  </div>
                </div>

                <hr />
                <div className="hii">
                  <div className="del">
                    <div className="fai">
                      <p className="qty">Qty </p>
                    </div>
                    <div className="remove">
                      <input
                        type="number"
                        placeholder={1}
                        min={1}
                        onChange={(e) => {
                          dispatch(addToCart(lists._id), e.target.value);
                        }}
                      />
                    </div>

                    <Buttons theme={theme}> Add to Cart</Buttons>
                  </div>
                </div>
              </form>
              <hr />
              <div className="list">
                <div className="likes">
                  <i className="fa-regular fa-heart like"></i>
                  <p>Add To Wish List</p>
                </div>
                <div className="wgh">
                  <i className="fa-solid fa-scale-balanced weight"></i>
                  <p>Add to Compare</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <div className="add-detail">
          <div className="details">
            <div className="det">
              <h3 onClick={() => setVeiw(true)}>Details</h3>
              <h3 onClick={() => setVeiw(false)}>More Infomation</h3>
              <h3>Reveiws</h3>
            </div>
          </div>

          <div className="add-items">
            {veiw ? (
              <>
                <p>{lists.detail}</p>
                <ul>
                  <li>{lists.list[0]}</li>
                  <li>{lists.list[1]}</li>
                  <li>{lists.list[2]}</li>
                  <li>{lists.list[3]}</li>
                </ul>
              </>
            ) : (
              <>
                <div className="info ">
                  <table>
                    <tr>
                      <td className="label">{lists.label[0]}</td>
                      <td className="data">{lists.data[0]}</td>
                    </tr>
                    <tr>
                      <td className="label">{lists.label[1]}</td>
                      <td className="data">{lists.data[1]}</td>
                    </tr>
                    <tr>
                      <td className="label">{lists.label[2]}</td>
                      <td className="data"> {lists.data[2]}</td>
                    </tr>
                    <tr>
                      <td className="labels">{lists.label[3]}</td>
                      <td className="datas">{lists.data[3]}</td>
                    </tr>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </Add>
    </>
  );
}
export default AddToCart;


export const Add = styled.div`
  margin: 0 auto;
  max-width: 1275px;

  .slider-container {
    width: 450px;

    @media (max-width: 520px) {
      width: 400px;
    }
    @media (max-width: 400px) {
      width: 300px;
    }
  }

  .slick-prev {
    left: 0;
    z-index: 1;
  }
  .slick-next {
    right: 0;
  }
  .slick-prev,
  .slick-next {
    top: 33% !important;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #7b7a7a;
  }
  .custom-slider li {
    width: 110px;
    height: 110px;
    img:hover {
      border: 2px solid black;
      border-radius: 0.5rem;
    }
  }
  .custom-slider {
    margin: 10px 0;
    bottom: -25%;
    width: 100%;
    text-align: start !important;
    position: relative !important;
    .small-img {
      margin: 1rem 0;
      width: 110px !important;
      max-width: 100%;
      background-color: #faf7f7;
      img {
        width: 110px !important;
        max-width: 100%;
      }
    }
  }

  .small-img {
  }
  table {
    width: 100%;
  }

  .info {
    .datas {
      padding: 0.75rem 0.5rem;
    }
    .data {
      padding: 0.75rem 0.5rem;
      border: 1px solid #e9e7e7;

      border-top: #4f4f4f;
      border-left: #4f4f4f;
      border-right: #4f4f4f;
    }
    .labels {
      font-weight: 500;
      padding: 0.75rem 0.5rem;
    }
    .label {
      font-weight: 500;
      padding: 0.75rem 0.5rem;
      border: 1px solid #e9e7e7;

      border-top: #4f4f4f;
      border-left: #4f4f4f;
      border-right: #4f4f4f;
    }
  }
  .add-detail {
    @media (min-width: 768px) {
      margin: 1.5rem 0 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .add-items {
    padding: 2.5rem 0 1rem;
    @media (min-width: 768px) {
      width: 100%;
    }

    li {
      list-style-type: circle;
    }
    p {
      margin-bottom: 0.75rem;
    }
    ul {
      margin-bottom: 0.75rem;
    }
  }
  .remove {
    input {
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
      max-width: 4rem;
    }
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
  .align-items {
    width: 100%;
    p {
      margin-top: 1rem;
    }
  }

  .hr {
    width: 100%;
  }
  h3 {
    margin-bottom: 1rem;
  }

  .stock {
    padding: 0.125rem 0.5rem;
    background-color: rgb(187, 247, 208);
    color: rgb(22, 101, 52);
  }
  li {
    list-style: none;
  }
  .add {
    display: flex;
    gap: 3rem;
    margin-top: 0.5rem;
    padding: 0.65rem;
    @media (max-width: 880px) {
      flex-wrap: wrap;
    }
    .images {
      .small {
        display: flex;
        gap: 2rem;
      }

      .image {
        /* width: 100%; */
        background-color: #faf7f7;
        img {
          mix-blend-mode: multiply;
          width: 100%;
        }
      }
    }
  }

  .p {
    padding-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .size {
    display: flex;
    align-items: center;

    gap: 0.75rem;
  }
  .category {
    margin-bottom: 4px;
  }
  .col {
    display: flex;
    gap: 1rem;
  }
  .oi {
    height: 1.6rem;
    width: 1.6rem;
    background-color: rgb(243 244 246);
    box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ii {
    height: 1.6rem;
    width: 1.6rem;
    background-color: rgb(243 244 246);
    box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ui {
    height: 1.6rem;
    width: 1.6rem;
    background-color: rgb(243 244 246);
    box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yi {
    height: 1.6rem;
    width: 1.6rem;
    background-color: rgb(243 244 246);
    box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ti {
    height: 1.6rem;
    width: 1.6rem;
    background-color: rgb(243 244 246);
    box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .siz {
    padding: 20px 0;
  }

  .col input:checked + label {
    border: 2px solid black;
  }
  .options {
    padding-top: 1rem;
    padding-bottom: 1rem;

    /* margin-bottom:abel1rem; */
  }

  .hii {
    padding: 1.25rem;
  }
  .del {
    display: flex;
    align-items: center;

    gap: 1rem;
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
  }

  .list {
    display: flex;
    gap: 2rem;
    margin: 1rem 0;
  }
  .likes {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    p {
      margin: 0%;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .like {
    border: none;
    outline: none;

    font-size: 1.4rem;
    color: gray;
    &:hover {
      color: black;
    }
  }
  .wgh {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    p {
      margin: 0%;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .weight {
    border: none;
    outline: none;

    font-size: 1.25rem;
    color: gray;
    &:hover {
      color: black;
    }
  }
  .details {
    border: 1px solid #e9e7e7;

    border-top: #4f4f4f;
    border-left: #4f4f4f;
    border-right: #4f4f4f;

    .det {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 1.25rem 0;
      color: #a1a1aa;
      h3 {
        font-size: 1.7rem;
        font-weight: 700;
      }

      @media (max-width: 400px) {
        flex-wrap: wrap-reverse;
      }
    }
    h3:hover {
      color: black;
      cursor: pointer;
    }
  }
`;