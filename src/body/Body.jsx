import React from 'react';
import styled from "styled-components"
import Sliders from './slider/Slider';
import Content from "./Content"
import Pimage from '../image/Pimage';
import Brand from './Brand';
import Container from './Container';
import Wave from "./Wave"


import SImage from '../image/Image';



const Body = () => {


   
    return (
      <>
        <SImage />
        <Sliders />
        <Content />
        <Pimage />
        <Brand />
        <Container />
        <Wave />
      </>
    );
}
export default Body;

