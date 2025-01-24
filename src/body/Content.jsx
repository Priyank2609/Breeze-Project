import React, { useEffect } from 'react';
import styled from 'styled-components';
import {H4} from "../styles/Theme"
import {backIn, backInOut, backOut, easeIn, easeInOut, motion, useInView,MotionConfig} from "framer-motion"
import { useRef } from 'react';
import { ShopBtn } from '../styles/Button';

const Content = () => {
 

  
    return (
      <>
        <H4>
          <motion.div
          initial={{opacity:0,y:'10%'}}
          whileInView={{opacity:1,y:'0'}}
          viewport={{once:true}}
          transition={{duration:0.3,ease:easeIn}}
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

            <h4>Our most popular offers</h4>
          </motion.div>
        </H4>

        <H3>
          <Div>
            <Cont>
              <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.2, ease: easeInOut }}
                viewport={{ once: true }}
                className="hy"
              >
                <div className="img">
                  <div className="btn">
                    <div className="hi">
                      <h3>Watches</h3>
                      <ShopBtn>Shop now</ShopBtn>
                    </div>
                  </div>
                </div>
                <p>
                  <b>The Ratio</b>removes variables like water temperature,
                  extraction time, and pour over pattern so you can worry less
                  about making your coffee, and more about drinking it
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.3, ease: easeInOut }}
                viewport={{ once: true }}
                className="hy"
              >
                <div className="img2">
                  <div className="btn">
                    <div className="hi">
                      <h3>Headphones</h3>
                      <ShopBtn>Shop now</ShopBtn>
                    </div>
                  </div>
                </div>
                <p>
                  <b>The Ratio</b>removes variables like water temperature,
                  extraction time, and pour over pattern so you can worry less
                  about making your coffee, and more about drinking it
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "5%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.4, ease: easeInOut }}
                viewport={{ once: true }}
                className="hy"
              >
                <div className="img3">
                  <div className="btn">
                    <div className="hi">
                      <h3>Speakers</h3>
                      <ShopBtn>Shop now</ShopBtn>
                    </div>
                  </div>
                </div>
                <p>
                  <b>The Ratio</b>removes variables like water temperature,
                  extraction time, and pour over pattern so you can worry less
                  about making your coffee, and more about drinking it
                </p>
              </motion.div>
            </Cont>
          </Div>
        </H3>
      </>
    );
}
export default Content;




   export const H3 = styled.div`
     height: 500px;
     max-width: 1260px;
     margin: 0 auto;
     @media (max-width: 770px) {
       flex-wrap: wrap;
       width: 100%;
       height: auto;
     }
   `;


export const Cont = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 15px;

  @media (max-width: 770px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
  &:hover {
    cursor: pointer;
  }
`;
   export const Div = styled.div`
     padding: 0 8px;

     p {
       /* position: relative; */
       padding: 20px 0;
       b {
         font-weight: 500;
       }
     }

     .img {
       background-image: url("https://breeze.swissupdemo.com/media/wysiwyg/breeze-evolution/browse-watches.webp");
       background-size: cover;
       background-position: center;
       /* position: relative; */
       height: 300px;
       width: 100%;
       border-radius: 2%;
       transition: 2s;

       &:hover {
         background-size: 110%;
       }
       @media (max-width: 1220px) {
         box-sizing: border-box;
         width: 100%;
       }
     }
     .img2 {
       background-image: url("https://breeze.swissupdemo.com/media/wysiwyg/breeze-evolution/browse-headphones.webp");
       background-size: cover;
       background-position: center;
       /* position: relative; */
       height: 300px;
       width: 100%;
       border-radius: 2%;
       @media (max-width: 1220px) {
         box-sizing: border-box;
         width: 100%;
         height: auto;
       }
       transition: cubic-bezier(0.68, -0.55, 0.265, 1.55);

       &:hover {
         background-size: 110%;
       }
     }
     .img3 {
       background-image: url("https://breeze.swissupdemo.com/media/wysiwyg/breeze-evolution/browse-speakers.webp");
       background-size: cover;
       background-position: center;
       /* position: relative; */
       height: 300px;
       width: 100%;
       border-radius: 2%;
       @media (max-width: 1220px) {
         box-sizing: border-box;
         width: 100%;
         height: auto;
       }
       transition: cubic-bezier(0.68, -0.55, 0.265, 1.55);

       &:hover {
         background-size: 110%;
       }
     }

     .btn {
       width: 100%;
       height: 300px;
       padding: 30px;
       display: flex;
       justify-content: center;
       align-items: center;
     }
     .hi {
       text-align: center;
     }
     h3 {
       font-size: 2.2rem;
       color: white;
     }

     /* ShopBtn { */
       /* margin-top: 20px;
       width: 116px;
       height: 44px;
       background-color: transparent;
       color: white;
       font-size: 1rem;
       border: 2px solid white;
       border-radius: 5%;
       font-weight: 600;
       margin-left: 10px;

       &:hover {
         background-color: rgb(255, 255, 255, 0.1);
         cursor: pointer;
       }
     } */
   `;

    

