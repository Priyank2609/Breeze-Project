import React from 'react';
import styled from 'styled-components';
import {backIn, motion} from 'framer-motion'

const Brand = () => {
    return (
      <>
        <Container>
          <h4>Our brands</h4>

          <Divcont>
            <motion.img
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: .3,ease:backIn }}
              viewport={{  once: true }}
              src="https://i1.wp.com/thefrenchieabroad.com/wp-content/uploads/2014/11/Expedia-logo.png?fit=2272%2C1192&ssl=1"
              alt=""
              width="160"
            />
            <motion.img
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: .4 ,ease:backIn}}
              viewport={{  once: true }}
              src="https://th.bing.com/th/id/OIP.1m-zI4VwGO8wpZvVHPU4NgHaE8?w=1200&h=800&rs=1&pid=ImgDetMain"
              alt=""
              width="90"
            />
            <motion.img
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: .5 ,ease:backIn}}
              viewport={{ once: true }}
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png"
              alt=""
              width="80"
            />
            <motion.img
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: .6,ease:backIn }}
              viewport={{  once: true }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
              alt=""
              width="70"
            />
            <motion.img
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: .7,ease:backIn }}
              viewport={{  once: true }}
              src="https://thumbs.dreamstime.com/b/airbnb-logo-editorial-ilustrativo-sobre-fondo-blanco-illustrative-white-background-eps-descargar-vector-jpeg-banner-ai-208329099.jpg"
              alt=""
              width="160"
              height="100"
            />
            <motion.img
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: .8,ease:backIn }}
              viewport={{  once: true }}
              src="https://i.pinimg.com/originals/11/70/ce/1170ced31b49e4aae92eb6152ed668f0.jpg"
              alt=""
              width="120"
              height="100"
            />
          </Divcont>
        </Container>
      </>
    );
}
export default Brand;


export const Container = styled.div`
  margin-top: 60px;

  h4 {
    padding: 16px 0;
    font-size: 1.75rem;
    text-align: center;
    font-weight: 700;
  }
`;
    

export const Divcont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  text-align: center;
  position: relative;

  img {
    mix-blend-mode: multiply;
  }

  @media (max-width: 905px) {
    flex-wrap: wrap;
    box-sizing: border-box;
    height: auto;
  }
`;