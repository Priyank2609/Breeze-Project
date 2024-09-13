
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <>
        <Foot>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f6f6f6" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,53.3C1120,43,1280,85,1360,106.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>


        <div className="cont">
          <div className="pika">
            <img src="https://breeze.swissupdemo.com/static/version1714766523/frontend/Swissup/breeze-evolution/en_US/images/logo.svg" alt="" />
          </div>
            <div className="yee">
                <input type="checkbox" id='h'/>
                <label htmlFor="h">
                <h6>Address   </h6> </label>
                <ul className='hi'>
                   <a href=""><li>  2311 North Los Robles Pasadena, California916-814-5395</li></a> 
                </ul>
            </div>
            <div className="yee">
            <input type="checkbox" id='p'/>
            <label htmlFor="p">
                <h6>Support</h6> </label>
                <ul className='hi'>
                <a href=""><li> Contact us</li> </a> 
                <a href="">  <li> Store location</li></a> 
                <a href="">  <li> Privacy policy</li></a> 
                <a href=""> <li> Terms of use</li></a> 
                </ul>
            </div>
            <div className="yee">
            <input type="checkbox" id='y'/>
            <label htmlFor="y">
                <h6>Customer center</h6> </label>
                
                <ul className='hi'> 
                <a href=""> <li>My Account</li> </a> 
                <a href=""><li> Order Status</li></a> 
                <a href=""> <li> Wishlist</li></a> 
                <a href=""> <li> Advanced Serach</li></a> 
                </ul>
            </div>
            <div className="yee">
            <input type="checkbox" id='t'/>
            <label htmlFor="t">
                <h6>About us</h6> </label>
                <ul className='hi'>
                <a href=""><li> Blog</li> </a> 
                <a href=""><li> Our Company</li></a> 
                <a href=""> <li> About Us</li></a> 
                <a href=""><li> Carriers</li></a> 
                </ul>
            </div>
        </div>
           
         </Foot>
        </>
    )
}
export default Footer;


export const Foot=styled.div`
background-color: #161635;
width: 100%;






.cont{
    display: flex;
   
    padding:0 8px ;
    @media (max-width:770px){
        width: 100%;
        flex-wrap: wrap;
    }

    .pika{

         margin: 0 auto;
         margin-bottom: 20px;
         
    img{
        filter: invert(1);
        
    }
}


.yee{
   
    color: white;
    margin: 0 auto;
    width: 20%;
  
    
    h6{
        margin-bottom: 0.25rem;
        font-size: 1.1rem;
     
        @media (min-width:770px){
            
        i {
            display: none;
        }
     
    }
    }
    ul{
        margin-top: 0.12rem;
        padding-bottom: 8px;
        li{
           
            list-style-type: none;
            padding: 0.12rem 0;

            &:hover{
                color: white;
                text-decoration: underline;
                cursor: pointer;
            }
        }
        a{
            text-decoration: none;
            color:rgba(255,255,255,0.6);
        }
      

    }
    @media (max-width: 770px){
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        height: 100%;
        text-align: center;
    }
  }
  .yee input{
        display: none;
    }
  @media (max-width: 770px){
   
  
   



.hi{
    max-height: 1px;
    overflow: hidden;
   
    position: relative;
    top: -100%;
    
    transition: all 0.3s ease;
}
 .yee input:checked ~ .hi {
    max-height: 300px; 
    padding-bottom: 25px;
    
    opacity: 1;
    top: 0;
    
    
    
} 
    }
}


    
`