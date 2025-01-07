import styled from "styled-components";



export const H4=styled.div`
margin-top: 30px;
padding: 36px 0;
text-align: center;
position: relative;

h4{
    padding: 15px 0;
    font-size: 1.75rem;
    font-weight: 700;
}

   `
    export const Buttons = styled.button`
   
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 500;
    height: 50px;
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6%;  
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    `

 export const theme = {
    colors: {
       white: "white",
       black: "black",
       blue:"#161635",
    },
    

  };





 
  