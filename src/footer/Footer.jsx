
import React from 'react';
import {Foot} from '../styles/Footer'
import {backIn, motion} from "framer-motion"
import { theme } from '../styles/Theme';

const Footer = () => {
    return (
      <>
        <Foot theme={theme}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path
              fill="#f6f6f6"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,53.3C1120,43,1280,85,1360,106.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>

          <div className="cont">
            <motion.div
              initial={{ opacity: 0, y: "5%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: backIn }}
              className="pika"
            >
              <img
                src="https://breeze.swissupdemo.com/static/version1714766523/frontend/Swissup/breeze-evolution/en_US/images/logo.svg"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "5%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: backIn }}
              className="yee"
            >
              <input type="checkbox" id="h" />
              <label htmlFor="h">
                <h6>Address </h6>{" "}
              </label>
              <ul className="hi">
                <a href="">
                  <li>
                    {" "}
                    2311 North Los Robles Pasadena, California916-814-5395
                  </li>
                </a>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "5%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: backIn }}
              className="yee"
            >
              <input type="checkbox" id="p" />
              <label htmlFor="p">
                <h6>Support</h6>{" "}
              </label>
              <ul className="hi">
                <a href="">
                  <li> Contact us</li>{" "}
                </a>
                <a href="">
                  {" "}
                  <li> Store location</li>
                </a>
                <a href="">
                  {" "}
                  <li> Privacy policy</li>
                </a>
                <a href="">
                  {" "}
                  <li> Terms of use</li>
                </a>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "5%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: backIn }}
              className="yee"
            >
              <input type="checkbox" id="y" />
              <label htmlFor="y">
                <h6>Customer center</h6>{" "}
              </label>

              <ul className="hi">
                <a href="">
                  {" "}
                  <li>My Account</li>{" "}
                </a>
                <a href="">
                  <li> Order Status</li>
                </a>
                <a href="">
                  {" "}
                  <li> Wishlist</li>
                </a>
                <a href="">
                  {" "}
                  <li> Advanced Serach</li>
                </a>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "5%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: backIn }}
              className="yee"
            >
              <input type="checkbox" id="t" />
              <label htmlFor="t">
                <h6>About us</h6>{" "}
              </label>
              <ul className="hi">
                <a href="">
                  <li> Blog</li>{" "}
                </a>
                <a href="">
                  <li> Our Company</li>
                </a>
                <a href="">
                  {" "}
                  <li> About Us</li>
                </a>
                <a href="">
                  <li> Carriers</li>
                </a>
              </ul>
            </motion.div>
          </div>

          <div className="footer-logo">
            <motion.div
              initial={{ opacity: 0, y: "5%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: .5, ease: backIn }}
              className="logos"
            >
              <img
                src="https://breeze.swissupdemo.com/static/version1736282197/frontend/Swissup/breeze-evolution/en_US/images/payments.svg"
                alt=""
              />
              <div className="copy-right">
                <span>
                  Copyright © 2022 Breeze Frontend. All rights reserved.
                </span>
              </div>
            </motion.div>
          </div>
        </Foot>
      </>
    );
}
export default Footer;


