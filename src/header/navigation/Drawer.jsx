
import styled from "styled-components";



const Drawers = ({ isOpen ,toggle}) => {
    
    return(
        <>
         {isOpen&&<Drop onClick={toggle}>
         <div className="icon">
               <i className="fa-solid fa-xmark"></i>
               </div>
          </Drop>}
     
           <SDrawer isOpen={isOpen}>  
           
               <List>
               
                   <a href=""><li>What's New</li></a>
                   <div className="ii">
                   <input type="checkbox" id="hy"/>
                   <label htmlFor="hy">
                   <li> <a href="/women">Women    </a><i className="fa-solid fa-angle-down" ></i>
                   
                   <ul className='dropdown'>
                        <li className="right"> 
                         
                          <a href="">Tops</a>
                          
                          <ul className='side'> 
                                <li>Jackets</li>
                                <li>Hoodies& Sweatshirts</li>
                                <li>Tees</li>
                                <li>Bras&Tanks</li>
                            </ul>
                          </li>
                        <li><a href="">Bottoms</a></li>
                    </ul>
                    </li>
                    </label>
                    </div>
                    <div className="ii">
                    <input type="checkbox" id="hyy"/>
                   <label htmlFor="hyy">
                   <li>
                   
                   <a href="">Men     <i className="fa-solid fa-angle-down" ></i></a>
                   
                   <ul className='dropdown'>
                        <li> <a href="">Tops</a>
                        </li>
                        
                        <li><a href="">Bottoms</a></li>
                    </ul>
                   </li>
                   </label>
                   </div>
                   <div className="ii">
                   <input type="checkbox" id="hyyy"/>
                   <label htmlFor="hyyy">
                   <li>
                   <a href="">  Gear  <i className="fa-solid fa-angle-down" ></i></a>
                   
                   <ul className='dropdown'>
                        <li> <a href="">Bags</a></li>
                        <li><a href="">Fitness Equipment</a></li>
                        <li><a href="">Watches</a></li>
                    </ul> 
                   </li>
                   </label>
                   </div>
                   <div className="ii">
                   <input type="checkbox" id="hyyyy"/>
                   <label htmlFor="hyyyy">
                   <li> 
                   <a href="">Training   <i className="fa-solid fa-angle-down" ></i></a>
                   <ul className='dropdown'>
                        <li> <a href="">Video Download</a></li>
                        
                    </ul>
                   
                   </li>
                   </label>
                   </div>
                   <a href=""><li>Sale</li></a>
                   </List>
                   

                  <hr />


                  <Supp>

                    <h3>Support</h3>

                    <h4>  <i className="fa-regular fa-envelope"></i> sale@breezefront.com</h4>
                    
                    <h4><i className="fa-solid fa-mobile-button"></i>916-814-5395</h4>  

                    <Lang>
                        <h2>Language</h2>
                        <div className="pk">
                          <input type="checkbox" id="jk" />
                          <label htmlFor="jk">
                      <h5>Breeze evoluation</h5>
                      </label>
                      <ul className='.ht'>
                        <li>Brezze evolution</li>
                        <li>RTL</li>
                    </ul>
                    </div>
                    </Lang>
                    </Supp>
           </SDrawer>
          
        </>
      

    )
   
}
export default Drawers;




 const SDrawer=styled.div`
  z-index: 150;
  position: fixed;
  top: 0;
  bottom: 0%;
  width: 24rem;
  max-width: 50%;
  background-color: #fff;
  transform: translateX(${(props)=>(props.isOpen ? "0" : "-100%" )}) ;
  transition: 0.3s ease;
  padding: 16px;
  overflow: auto;
 
  


  a{
    color: black;
    text-decoration: none;
  }

 
  `
 const Drop=styled.div`
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  position: fixed;
  background-color: rgba(0,0,0,0.7);
  transition: 0.3s ease;
  .icon{
       margin-top: 2rem;
       font-size: 1.5rem;
       position:fixed;
       right: 40%;
       color: white;
      }
 
  `

  export const List=styled.div`
    list-style: none;
    padding: 15px 0;
    font-weight: 600;
    
    input{
      display: none;
    }
    a{
      color: rgb(0 45 87); 
    }
    li{
     
      padding: 8px;
      &:hover{
        cursor: pointer;
        background-color: #f2f2f2;
    }
    }

  i{
    font-size:1rem;
   
  }
     ul.dropdown{
    max-height: 1px;
    overflow: hidden;  
    transition: all 0.3s ease;
    }

  
    input:checked ~ label ul.dropdown{
    max-height: 300px; 
   
    opacity: 1;
    top: 0;
    left: 1%;
    }


    li ul.side{
      color: rgb(0 45 87); 
      list-style: none;
    }

    li.input:checked ul.side{
    opacity: 1;
    }
  `


export const Supp=styled.div`
  margin-top:16px;
  padding: 8px;
  h3{
    font-size: 0.95rem;
    font-weight:600;
    color:rgb(17 24 39 / 60%);
    text-transform:uppercase
  }

  h4{
    font-size: 1rem;
    font-weight: 500;
    color:rgb(17 24 39 / 60%);
    opacity: 0.7;
    padding: 10px 0;
    @media (max-width:420px){
    font-size: 60%;
  }
 

  }
`
export const Lang=styled.div`
 margin-top: 16px;
display: flex;


h2{


   
    font-size: 0.95rem;
    font-weight:600;
    color:rgb(17 24 39 / 60%);
    text-transform:uppercase;
    @media (max-width:420px){
    font-size: 60%;
  }
  @media (max-width:280px){
    font-size: 40%;
  }
  @media (max-width:245px){
    font-size: 20%;
  }
}
   h5{
    font-size: 1rem;
    font-weight: 500;
    padding-left: 10px;
    @media (max-width:420px){
    font-size: 60%;
  }
  
   }
  input{
    display: none;
  }
ul{
  opacity: 0;
}

input:checked ~ ul{
  opacity: 1;
  z-index: 1;
  list-style: none;
  background-color: #fff;
  border-radius: .25rem;
  box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1), 0 1px 6px rgba(0, 0, 0, .05);

  li{
    padding: 10px;
  }
}
`
