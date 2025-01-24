import React, { useRef } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { CardContext } from '../../cart/CartContext';
// import { useContext } from 'react';
import {useSelector,useDispatch} from "react-redux"
 import { NavLink } from 'react-router-dom';
import { addProductToCart, getNav, getPopUp, getTotalCost } from '../../slice/addSlice';
import {backIn, easeIn, easeInOut, motion, useInView} from "framer-motion"
import { all } from 'axios';
import { H4 } from '../../styles/Theme';
import { Div } from '../../styles/Button';


const Sliders = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const cart=useContext(CardContext)
  const carts = useSelector((state) => state.products.productList);
  const cartSplice = carts.slice(12, 19);
  const dispatch = useDispatch();

  const dataHandler = (e) => {
    e.preventDefault();
    dispatch(getTotalCost());
    dispatch(getPopUp());
    dispatch(getNav());
  };

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
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <H4>
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: easeIn }}
        >
          <p>
            <svg
              width="48"
              height="9"
              viewBox="0 0 48 9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.441 4.89907C22.0551 4.61749 22.8357 4.40117 24 4.40117V0C22.1531 0 20.6752 0.358529 19.4087 0.939228C18.2215 1.48357 17.2908 2.19727 16.57 2.7499C16.5521 2.76362 16.5344 2.77725 16.5167 2.79077C15.0959 3.87982 14.142 4.59883 12 4.59883C10.8357 4.59883 10.0551 4.38251 9.441 4.10093C8.77707 3.79651 8.22162 3.38254 7.44956 2.79077L7.41657 2.76549C5.84205 1.55852 3.80893 0 -1.90735e-06 0C-3.81198 0 -5.85544 1.56053 -7.43748 2.76867L-7.4631 2.78824C-8.88873 3.87687 -9.85506 4.59883 -12 4.59883V9C-8.18803 9 -6.14456 7.43947 -4.56253 6.23133L-4.5369 6.21176C-3.11127 5.12313 -2.14494 4.40117 -1.90735e-06 4.40117C2.14195 4.40117 3.09588 5.12018 4.51674 6.20923C4.53438 6.22275 4.55215 6.23637 4.57005 6.2501C5.29075 6.80273 6.22151 7.51643 7.40871 8.06077C8.67521 8.64147 10.1531 9 12 9C15.8089 9 17.842 7.44148 19.4166 6.23451L19.4496 6.20923C20.2216 5.61746 20.7771 5.20349 21.441 4.89907Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M57.441 4.10093C58.0551 4.38251 58.8357 4.59883 60 4.59883V9C58.1531 9 56.6752 8.64147 55.4087 8.06077C54.2215 7.51643 53.2908 6.80273 52.57 6.2501C52.5521 6.23638 52.5344 6.22275 52.5167 6.20923C51.0959 5.12018 50.142 4.40117 48 4.40117C46.8357 4.40117 46.0551 4.61749 45.441 4.89907C44.7771 5.20349 44.2216 5.61746 43.4496 6.20923L43.4166 6.23451C41.842 7.44148 39.8089 9 36 9C32.188 9 30.1446 7.43947 28.5625 6.23133L28.5369 6.21176C27.1113 5.12313 26.1449 4.40117 24 4.40117V0C27.812 0 29.8554 1.56053 31.4375 2.76867L31.4631 2.78824C32.8887 3.87687 33.8551 4.59883 36 4.59883C38.142 4.59883 39.0959 3.87982 40.5167 2.79077C40.5344 2.77725 40.5521 2.76363 40.57 2.7499C41.2907 2.19727 42.2215 1.48357 43.4087 0.939228C44.6752 0.358529 46.1531 0 48 0C51.8089 0 53.842 1.55852 55.4166 2.76549L55.4496 2.79077C56.2216 3.38254 56.7771 3.79651 57.441 4.10093Z"
              />
            </svg>
          </p>

          <h4>Browse our store</h4>
        </motion.div>
      </H4>
      <Section>
        <div className="slider-container">
          <Slider {...settings}>
            {cartSplice.map((d, index) => (
              <div key={index}>
                <Div>
                  <motion.div
                    initial={{ opacity: 0, y: "10%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                    viewport={{ once: true }}
                    className="productcard"
                  >
                    <div className="productimage">
                      {/* {cart.getProductQuantity(d.id)>0 ?
                      <>
                       
                       
                      </>:
                      <button className='btn' onClick={()=>cart.addOneToCart(d.id)}>{d.btnn}</button>
                      } */}
                      <form on onSubmit={dataHandler}>
                        <img src={d.img[0]} alt="" />

                        <button
                          className="btn"
                          onClick={() => dispatch(addProductToCart(d._id))}
                        >
                          {d.btnn}
                        </button>
                      </form>
                      <button className="like">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="weight">
                        <i className="fa-solid fa-scale-balanced"></i>
                      </button>
                    </div>

                    <NavLink to={`/addtocart/${d._id}`}>
                      <div className="productinfo">
                        <h2>{d.like}</h2>
                        <span>{d.price}</span>
                      </div>
                    </NavLink>
                  </motion.div>
                </Div>
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    </>
  );
}
export default Sliders;


export const Section = styled.div`
  width: 80%;
  margin: auto;

  &:hover {
    cursor: pointer;
  }
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-dots li button:before {
    font-size: 1rem;
    color: black;
    opacity: 1;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #b8b2b2;
    border: black;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 1.5rem;
  }
`;

