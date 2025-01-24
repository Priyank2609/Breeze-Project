import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { Div,Sale } from '../styles/Header';


const Header = () => {
    return (
      <>
        <Div theme={theme}>
          <Sale >
            <i className="fa-regular fa-envelope"></i>
            <h4> sale@breezefront.com</h4>
            <i className="fa-solid fa-mobile-button"></i>
            <h4>916-814-5395</h4>
          </Sale>
          <Sale>
            <input type="checkbox" id="kit" />
            <label htmlFor="kit">
              <h3>
                Brezze evolution<i className="icon fa-solid fa-angle-down"></i>
              </h3>
            </label>
            <ul className=".hii">
              <li>Brezze evolution</li>
              <li>RTL</li>
            </ul>
          </Sale>
        </Div>
      </>
    );
}
export default Header;



