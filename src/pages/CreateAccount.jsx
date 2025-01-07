import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slice/userSlice';

function CreateAccount() {
  const formvalue=useRef()
  const [showPass,setShowPass]=useState(false)
  const navigate=useNavigate()
    // const initialvalue = { firstname: "",lastname:"", email: "", password: "",confirmPassword:"", showPass: false };
    // const [formvalue, setFormvalue] = useState(initialvalue);
    const [formErrors, setFormErrors] = useState({});
 const dispatch=useDispatch()
    
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormvalue({ ...formvalue, [name]: value });
    // };
    const validate = (value) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     
      if (!value.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(value.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!value.password) {
        errors.password = "Password is required";
      } else if (value.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (value.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      if (!value.confirmPassword){
        errors.confirmPassword="Confirm Password is require"
      }
      else if (value.password !== value.confirmPassword) {
        errors.confirmPassword="Confirm Password is Invalid"
      } 
        
      
      if (!value.firstname) {
        errors.firstname= "FirstName is required!";
      } 
      if (!value.lastname) {
        errors.lastname = "LastName is required!";
      } 
      return errors;
    };
    
    
    const handleSubmit = async(e) => {
      e.preventDefault();
     
       const payload={
        firstname:formvalue.current.firstname.value,
        lastname:formvalue.current.lastname.value,
        email:formvalue.current.email.value,
        password:formvalue.current.password.value,
        confirmPassword:formvalue.current.confirmPassword.value
      }
      // console.log("hey");
      setFormErrors(validate(payload));
      console.log(payload);
      

      if(Object.keys(formErrors).length===0){
         axios.post("http://localhost:2000/users/reg",{payload},{
          withCredentials:true
         })
        .then((res)=>{
          if(res.status===201){
            console.log(res)
         
            dispatch(setCredentials(payload))
            navigate("/")
          }
        }
        )
          
        }
      }
      
     
      
 
    //   if (formvalue.password !== formvalue.confirmPassword) {
    //               alert("Passwords do not match!");
    //               return;
    //             }
  

   
    
    
    
        return(
            <>
                <Create>
                    <div className="customer">
                        <div className="div">
                        <h1>Create New Customer Account</h1>
                        </div>
                        <div className="account">
                            
                            <form  onSubmit={handleSubmit} method="post" ref={formvalue}>
                            <div className="info">
                            <p>Personal Information</p>
                            <div className="name">
                            <label htmlFor="firstName">First Name</label>
      
                            <input type="text" id="firstName" name="firstname" value={formvalue.firstname}   />
                            <p className='error'>{formErrors.firstname}</p>
                            </div>
                            <div className="hy">
                            <label htmlFor="lastName">Last Name</label>
                           <input type="text" id="lastName" name="lastname" value={formvalue.lastname}  />
                           <p className='error'>{formErrors.lastname}</p>
                            </div>
                            <div className="hi">
                            <input type="checkbox" id='signnn'/>
                            <label htmlFor="signnn">Sign Up for Newsletter</label>
                            </div>
                            <div className="hi">
                            <input type="checkbox" id='signn'/>
                            <label htmlFor="signn">Allow remote shopping assistance</label>
                            </div>
                            </div>
                            <p>Sign-in Information</p>
                            <div className="name">
                            <label htmlFor="Email">Email</label>
                           
                            <input type="email" id="Email" name="email" value={formvalue.email}  />
                            <p className='error'>{formErrors.email}</p>
                            </div>
                          
                            <div className="hy">
                            <label htmlFor="Password">Password</label>
                            
                            <input type={showPass ? "text" : "password"} id="Password" name="password" value={formvalue.password}   />
                            <p className='error'>{formErrors.password}</p>
                            </div>
                         
                            <div className="hy">
                            <label htmlFor="ConfirmPassword"> Conform Password</label>
                            
                            <input type={showPass ? "text" : "password"} id="ConfirmPassword" name="confirmPassword" value={formvalue.confirmPassword}  />
                            <p className="error">{formErrors.confirmPassword}</p>
                            </div>
                            <div className="hi">
                            <input type="checkbox" id='sign'  value={formvalue.showPass} onClick={()=>setShowPass(!showPass)} />
                            <label htmlFor="sign">Show Password</label>
                            </div>
                            <div className="btn">
                                <button type='submit'>Create an Account</button>
                            </div>
                        </form>
                        </div>
                     
                    </div>
                </Create>
            </>
        )
    }
    export default CreateAccount;
    

export const Create=styled.div`
     position: relative;
     max-width: 1260px;
     margin: 0 auto;
.customer{
   
    padding: 10px 8px 32px 8px;
   
}
.div{
    margin: 20px 0 32px 0;
}


@media (min-width: 640px){
h1{
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.24rem;
    margin: 4rem;
    text-align: center;
    
}
}
.account{
    position: relative;
    z-index: 1;
    padding: 40px 48px;
    margin: 0 auto;
    max-width: 550px;
    margin: 0 auto;
    
    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, .1), 0 1px 6px rgba(0, 0, 0, .05);
    
    border: 3px solid #000;
    border-width: 3px 0 0;
    border-radius: .25rem;
}
.info{
    margin-bottom: 32px;
}
p{
    font-size: 1.25rem;
    line-height: 1.75rem;
    width: 100%;
    margin: 0 0 1.25rem;
    padding: 0 0 .125rem;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

}
.error{
        color: red;
        font-size: 1rem;
        border: none;
    }

#firstName ,#lastName,#Email,#Password,#ConfirmPassword{
    width: 100%;
    padding: 0.5rem .75rem;
    border:2px solid rgb(17 24 39);
    background-color:rgb(255 255 255);
    border-radius:.25rem;
    
   }
   .hy{
    margin-top: .75rem;
   }

.hi{
    margin-top: 12px;
    display: flex;
    gap: .375rem;
}
input{
    margin-top: 1.7px;
    padding: 8px 12px;
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
    width: 100%;
    border-radius: .25rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    
  }
  .btn{
    display: flex;
    
    gap: 0.5rem;
    margin: 20px 0;
    align-items: center;
    flex-wrap: wrap;
  }
`

