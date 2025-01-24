import React from 'react';
import styled from 'styled-components';
// import { useData } from '../cart/ProductData';
import {useDispatch, useSelector} from "react-redux"
import { filterByColor, removeColor, removeColors, setColor } from '../slice/productSlice';
import { p } from 'framer-motion/client';
import { Black, theme ,Blue, Brown, Green, Grey, Oranage, Pink, Yellow, Red, Sizes} from '../styles/Theme';



const Shop = () => {
  // const {dispatch( filterByColor,removeColor,color}=useData();
  const color = useSelector((state) => state.products.color);
  const colors = useSelector((state) => state.products.colors);

  const dispatch = useDispatch();
  // console.log(color)
  return (
    <>
      <Shoping>
        <div className="shop">
          <div className="menubar">
            <input type="checkbox" id="checks" />
            <div className="he">
              <label htmlFor="checks">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <p>Shop By</p>
            </div>

            <div className="menu">
              <div className="black">
                <input type="checkbox" id="checks" />

                <div className="icon">
                  <label htmlFor="checks">
                    <i className="fa-solid fa-xmark"></i>
                  </label>
                </div>
                {color ? (
                  <div className="category">
                    <div className="title">Now Shopping by</div>
                    <ul className="remove">
                      <li>Color: {colors}</li>
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() =>
                          dispatch(removeColor()) & dispatch(removeColors())
                        }
                      ></i>
                    </ul>
                    <div className="clear">
                      <p
                        onClick={() =>
                          dispatch(removeColor()) & dispatch(removeColors())
                        }
                      >
                        Clear All
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <div className="category">
                  <div className="title">Category</div>
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
                  <div className="title">Price</div>
                  <div className="options">
                    <ul>
                      <li>
                        $20.00-$29.99
                        <span>(23)</span>
                      </li>
                      <li>
                        $30.00-$39.99
                        <span>(19)</span>
                      </li>
                      <li>
                        $40.00-$49.99
                        <span>(13)</span>
                      </li>
                      <li>
                        $50.00-$59.99
                        <span>(12)</span>
                      </li>
                      <li>
                        $60.00-$69.99
                        <span>(5)</span>
                      </li>
                      <li>
                        $70.00-$79.99
                        <span>(2)</span>
                      </li>
                      <li>
                        $80.00 and above
                        <span>(1)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {color ? (
                  <></>
                ) : (
                  <div className="category">
                    <div className="title">Color</div>

                    <div className="options">
                      <ul className="col">
                        <Black
                          theme={theme}
                          onClick={() => {
                            dispatch(filterByColor("black")) &
                              dispatch(setColor());
                          }}
                        ></Black>
                        <Blue
                          theme={theme}
                          onClick={() => {
                            dispatch(filterByColor("blue")) &
                              dispatch(setColor());
                          }}
                        ></Blue>
                        <Brown
                          theme={theme}
                          onClick={() => {
                            dispatch(filterByColor("brown")) &
                              dispatch(setColor());
                          }}
                        ></Brown>
                        <Grey
                          theme={theme}
                          onClick={() => {
                            dispatch(filterByColor("gray")) &
                              dispatch(setColor());
                          }}
                        ></Grey>
                        <Green
                          theme={theme}
                          onClick={() => {
                            dispatch(filterByColor("green")) &
                              dispatch(setColor());
                          }}
                        ></Green>
                      </ul>
                    </div>
                    <div className="options">
                      <ul className="col">
                        <Oranage theme={theme}></Oranage>
                        <Pink theme={theme}></Pink>
                        <Yellow theme={theme}></Yellow>
                        <Red theme={theme}></Red>
                        <Grey theme={theme}></Grey>
                      </ul>
                    </div>
                  </div>
                )}

                <div className="category">
                  <div className="title">Size</div>
                  <div className="options">
                    <ul className="col">
                      <Sizes theme={theme}>XS</Sizes>
                      <Sizes theme={theme}>S</Sizes>
                      <Sizes theme={theme}>M</Sizes>
                      <Sizes theme={theme}>L</Sizes>
                      <Sizes theme={theme}>XL</Sizes>
                    </ul>
                  </div>
                  <div className="options">
                    <ul className="col">
                      <Sizes theme={theme}>28</Sizes>
                      <Sizes theme={theme}>29</Sizes>
                      <Sizes theme={theme}>30</Sizes>
                      <Sizes theme={theme}>31</Sizes>
                      <Sizes theme={theme}>32</Sizes>
                    </ul>
                  </div>
                </div>
                <div className="category">
                  <div className="title">New</div>
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
                  <div className="title">Sale</div>
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
                  <div className="title">Climate</div>
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

          <br />
          <br />
        </div>
      </Shoping>
    </>
  );
}
export default Shop;


export const Shoping = styled.div`
  
  .remove {
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      color: gray;
      cursor: pointer;
    }
  }

  .clear {
    margin: 8px 0 12px 0;
    p {
      font-size: 0.875rem;
      opacity: 0.5;
      border: none;
      text-align: right;
    
      font-weight: 400;
      padding: 0;
      margin: 0;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;