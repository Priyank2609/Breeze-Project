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


    export const Grey = styled.li`
      height: 1.6rem;
      width: 1.6rem;
      background-color: ${(props) => props.theme.colors.grey};
      border-radius: 50%;
    `;

    export const Green = styled.li`
      height: 1.6rem;
      width: 1.6rem;
      background-color: ${(props) => props.theme.colors.green};
      border-radius: 50%;
    `;
    export const Black = styled.li`
      height: 1.6rem;
      width: 1.6rem;
      background-color: ${(props) => props.theme.colors.black};
      border-radius: 50%;
    `;
    export const Brown = styled.li`
      height: 1.6rem;
      width: 1.6rem;
      background-color: ${(props) => props.theme.colors.brown};
      border-radius: 50%;
    `;
    export const Blue = styled.li`
      height: 1.6rem;
      width: 1.6rem;
      background-color: ${(props) => props.theme.colors.lightBlue};
      border-radius: 50%;
    `;
     export const Oranage = styled.li`
       height: 1.6rem;
       width: 1.6rem;
       background-color: ${(props) => props.theme.colors.oranage};
       border-radius: 50%;
     `;
      export const Pink= styled.li`
        height: 1.6rem;
        width: 1.6rem;
        background-color: ${(props) => props.theme.colors.pink};
        border-radius: 50%;
      `;
       export const Red = styled.li`
         height: 1.6rem;
         width: 1.6rem;
         background-color: ${(props) => props.theme.colors.red};
         border-radius: 50%;
       `;
        export const Yellow = styled.li`
          height: 1.6rem;
          width: 1.6rem;
          background-color: ${(props) => props.theme.colors.yellow};
          border-radius: 50%;
        `;
        export const Sizes = styled.li`
          
            height: 1.6rem;
            width: 1.6rem;
            background-color: rgb(243 244 246);
            box-shadow: 0 0 0 1px rgb(17 24 39 / 10%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          
        `;
   

 export const theme = {
   colors: {
     white: "white",
     black: "black",
     blue: "#161635",
     lightBlue: "#4800ff",
     brown: "#82310e",
     green: "#04fd25",
     grey: " #4f4f4f",
     pink: "#fc13ae",
     yellow: "#fff30b",
     red: "#f11827",
     oranage: "#e74d11",
   },
 };



      export const Button = styled.button`
      
      `;



 
  