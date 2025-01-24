import React from 'react';
// import { CardContext } from '../cart/CartContext';
// import { useContext } from 'react';
import styled from 'styled-components';
// import { useData } from '../cart/ProductData';

import { useDispatch ,useSelector} from 'react-redux';
import { addToCart} from '../slice/addSlice';
import { NavLink } from 'react-router-dom';
import { Green, Pink, Red, Sizes, theme } from "../styles/Theme";


const Listveiw = () => {
    // const {products}=useData();
    // const cart=useContext(CardContext)
         const carts=useSelector((state)=>state.products.productList)
    const dispatch=useDispatch()
    return (
      <>
        <List>
          <div className="flexs">
            {carts.map((d, idx) => {
              return (
                <div className="hr" key={idx}>
                  <div className="divs">
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
                          <ul className="siz">
                            <Sizes>28</Sizes>
                            <Sizes>29</Sizes>
                            <Sizes>30</Sizes>
                            <Sizes>31</Sizes>
                            <Sizes>32</Sizes>
                          </ul>
                        </div>
                        <div className="cols">
                          <ul className="color">
                            <Red theme={theme}></Red>
                            <Pink theme={theme}></Pink>
                            <Green theme={theme}></Green>
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
                          <button className="likes">
                            <i className="fa-regular fa-heart"></i>
                          </button>
                          <button className="weights">
                            <i className="fa-solid fa-scale-balanced"></i>
                          </button>
                        </div>
                      </div>

                      <p className="ps">Learn More</p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </List>
      </>
    );
}
export default Listveiw;


export const List = styled.div`
  .cols {
    li {
      list-style-type: none;
    }
  }
  .flexs {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    width: 100%;
  }
  .hr {
    width: 100%;
  }
  .divs {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .productcards {
    img {
      width: 325px;
      max-width: 100%;
      mix-blend-mode: multiply;
    }
  }

  .hey {
    @media (max-width: 1030px) {
      display: none;
    }
  }
  .productinfos {
    .prices {
      margin: 5px 0;
      color: gray;
    }
    .titles {
      h2 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
    ul {
      display: flex;
      margin: 10px 0;
      gap: 1rem;
    }
  }
  .hiis {
    display: flex;
    gap: 1rem;
  }

  .btns {
    gap: 0.25rem;
    font-weight: 600;
    padding: 0.5rem 1.25rem;
    color: rgb(75 85 99);
    background-color: rgb(229 231 235);
    border: 2px solid rgb(229 231 235 / 0%);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .likes {
    color: rgb(17 24 39 / 40%);
    font-size: 1.6rem;
    background-color: white;
    border: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  .weights {
    color: rgb(17 24 39 / 40%);
    font-size: 1.6rem;
    background-color: white;
    border: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  .pika {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 6px 0;
  }
  .ps {
    border: none;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .productimages {
    background-color: #faf7f7;
  }
`;