import React from 'react';
import styled from 'styled-components';

import { theme } from '../styles/Theme';
import { Buttons } from '../styles/Theme';


const Container = () => {
    return(
        <>

        <Conter>
            <img src="https://breeze.swissupdemo.com/media/wysiwyg/breeze-evolution/our-vision.webp" alt=""  />

            <div className="hyy">
                <div className="cont">
                    <div className="hi">
                    <h2>Enjoying your evenings at home shouldn’t feel like a compromise.</h2>
                    <p>The Ratio removes variables like water temperature, extraction time, and pour over pattern so you can worry less about making your coffee, and more about drinking it.</p>
                    <p>The Ratio removes variables like water temperature, extraction time, and pour over pattern so you can worry less about making your coffee, and more about drinking it.</p>
                    
                    <div className="btn">
                   <Buttons theme={theme}>Our vision</Buttons>
                   </div>
                    </div>
                </div>
            </div>

        </Conter>
     
        </>
    )
}
export default Container;


export const Conter=styled.div`
position: relative;
margin: 40px 96px;
padding: 0 8px;
display: flex;


.hi{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    
}
    
    img{
        width: 530px;
        height:530px;
        padding-right: 20px;
        margin-bottom: 12px;
        @media (max-width:1270px){
           box-sizing: border-box;
           width: 50%;
           height: 50%;
        
    }
    @media (max-width: 770px){
        display: none;
        margin-top: 40px;
    }
      
    }
    .cont{
        padding: 30px;
        display: flex;
    }
    h2{
        margin-bottom: 30px;
        font-size: 1.78rem;
        font-weight: 700;
     
    }
    p{
        margin-bottom: 12px;
        font-size: 18px;
    }
.btn{
    margin-top: 20px;
}
    
    @media (max-width:1270px){
            margin: 0;
            margin-top: 40px;
            padding: 0 8px;       
    }
    
`
