import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SignIn = () => {

    async function fetchApi() {
        try {
            const res = await fetch("http://localhost:8082/login");
            const resJson = await res.json();
            console.log(resJson);
            return resJson;
        } catch (err) {
            console.log(err);
        }
    }

    const data = fetchApi();

    const [formdata, setFormData] = useState({
        email: "",
        password: "",
        showpassword: false
    })

    const func = (event) => {
        const name=event.target.name;
        const value=event.target.value
        setFormData((prevdata) => {
            return { ...prevdata, [name]:value};
        })
    }

    const showPassFunc = () => {
        setFormData((prevdata) => {
            return { ...prevdata, showpassword: !formdata.showpassword };
        })
    }
   
    console.log(formdata)
   
    return(
        <>
            <Sign>
            <form   method='post' action='http://localhost:8082/login'>

            <div className="main">
                <div className="div">
                    <h1>customer login</h1>
                </div>

                <div className="login">

                    <div className="log">
                    <h4>Registered Customers</h4>
                  
                    <p>If you have an account, sign in with your email address.</p>
                    <div className="mail">
                    <label htmlFor='email'>Email</label>
                   
                    <input type="email" id="email" required name="email" value={formdata.email} onChange={func} />
                    </div>
                    <div className="pass">
                    <label htmlFor="password">Password</label>
                    <input type={formdata.showpassword ? 'text':'password'} id='password' name='password' value={formdata.password} onChange={func} required />
                    </div>
                    <div className="show">
                        <input type="checkbox" id='showpass' value={formdata.showpassword} onClick={showPassFunc}/>
                        <label htmlFor="show password">Show Password</label>
                    </div>
                    <div className="btn">
                        <button type='submit'>Sign In</button>
                        <a href="/forget"><p>Forget Your Password?</p></a>
                    </div>
                    
              </div>
              <div className="cont">
                        <h4>New Customers</h4>
                        <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                        <NavLink to="/account">
                        <div className="btn">
                        <button>Create an Account</button>
                        </div>
                        </NavLink>
                    </div>
              </div>
            </div>
            
            </form>
            </Sign>
        </>
    )
}
export default SignIn;

export const Sign=styled.div`
 
 position: relative;
 max-width: 1260px;
 margin: 0 auto;
.main{
   
    padding: 10px 8px 32px 8px;
    
   
}
.div{
    margin: 64px 0;
}
h1{
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.24rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
    text-align: center;
    
}

.login{
    padding: 40px 48px;
    margin: 0 auto;
    
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1), 0 1px 6px rgba(0, 0, 0, .05);
    
    border: 3px solid #000;
    border-width: 3px 0 0;
    border-radius: .25rem;
    @media (min-width: 768px){
     display: flex;
     gap: 3rem;
    
    }
    @media (max-width: 639px){
        padding: 16px 24px;
    }
    @media (min-width: 640px){
        max-width: 640px;    
    }
    @media (min-width:768px){
        max-width:768px

    }
    @media (min-width:1024px){
        max-width:1024px;
        margin: 0 auto;
        
   
    }
    
 } 
    
    h4{
        margin-bottom: 12px;
        padding: 12px 0;
        font-size: 1.5rem;
        font-weight: 700;
    }
    p{
        color: rgb(17 24 39 / 60%);
       
    }
    #email ,#password{
    width: 100%;
    padding: 0.5rem .75rem;
    border:2px solid rgb(17 24 39);
    background-color:rgb(255 255 255);
    border-radius:.25rem;
   }
 
   .mail{
    margin-top:12px;
    
   }
   .pass{
    margin-top: 12px;
   }
   .show{
    margin-top: 12px;
    display: flex;
    gap: 0.375rem;
    align-items: center;
   }
  #showpass{
    margin-top: 2px;
  }
  button{
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 1.25rem;
    gap: 0.25rem;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: .25rem;
    cursor: pointer;
  }
  .btn{
    display: flex;
    gap: 0.5rem;
    margin: 20px 0;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    p{
    &:hover{
            text-decoration: underline;
        }
    }
  }
  a{
    text-decoration: none;
   p{
    color: rgb(29 78 216 / 85%);
   }
  }
  
  .cont{
    p{
        color: #000;
    }
    @media (min-width: 768px){
        flex-grow: 1;
        flex-basis: 0;
        margin: 0 !important;
    }

  }

`