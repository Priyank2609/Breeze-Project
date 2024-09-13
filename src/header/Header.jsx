import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return(
        <>
            <Div>
                <Sale>
                <i className="fa-regular fa-envelope"></i>
                    <h4>  sale@breezefront.com</h4>
                    <i className="fa-solid fa-mobile-button"></i>
                    <h4>916-814-5395</h4>   
                </Sale>
                <Sale>

                    <input type="checkbox" id='kit' />
                    <label htmlFor="kit">
                    <h3>Brezze evolution<i  className="icon fa-solid fa-angle-down" ></i></h3>
                    </label>
                    <ul className='.hii'>
                        <li>Brezze evolution</li>
                        <li>RTL</li>
                    </ul>
                </Sale>

            
                
                
            </Div>
        </>
    )
}
export default Header;


export const Div=styled.div`
width: 100%;
height: 44px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #161635;
color: white;

h4{
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 500; 
    padding-right: 1rem;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}
i{
   
    font-size: 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
}

    @media (max-width: 640px){
        display: none;
    }
    h3{
        font-size: 1rem;
        font-weight: 500;
        
        &:hover{
            cursor: pointer;
        }
       
    }

`
export const Sale=styled.div`

padding: 10px 8px;
input{
    display: none;
}
 
ul{ 
    
    overflow: hidden;
    color: black; 
    position: absolute;  
    opacity: 0;
   } 
    input:checked ~ ul{
    list-style: none;
    opacity: 1;
    z-index: 1;
    padding: 8px;
    width: 176px;
    height: 72px;
    right: 1%;
    background-color: #fff;
    border-radius: .25rem;
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1), 0 1px 6px rgba(0, 0, 0, .05);
    
    }
    li{
        padding: .25rem .5rem;
      
        &:hover{
            background-color: #f2f2f2;
        }
    }
    
`


