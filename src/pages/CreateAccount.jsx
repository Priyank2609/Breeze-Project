import React, { useState } from 'react';
import styled from 'styled-components';

const CreateAccount = () => {

    // const [pass ,setPass]=useState('')
    // const [showpass,setShowPass]=useState(true)

    // const handlepass=(e)=>{
    //     setPass(e.target.value)
    // }
    // const handleshowpass=()=>{
    //     setShowPass(!showpass)
    // }


    const [formdata, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        showpassword: false
    })

    const func = (event) => {
        setFormData((prevdata) => {
            return { ...prevdata, [ event.target.name]:event.target.value  };
        })
    }

    const showPasswordFunc = () => {
        setFormData((prevdata) => {
            return { ...prevdata, showpassword: !formdata.showpassword };
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault(); 
    
        
        if (formdata.password !== formdata.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
    
       
        console.log("Submitting form data:", formdata);
      };
    return(
        <>
            <Create>
                <div className="customer">
                    <div className="div">
                    <h1>Create New Customer Account</h1>
                    </div>
                    <div className="account">
                        <form action="http://localhost:8082/sign-up" method="post">
                        <div className="info">
                        <p>Personal Information</p>
                        <div className="name">
                        <label htmlFor="first">First Name</label>
                        {/* <input type="text" id='first' name="firstname" value={formdata.firstname} onClick={func} required/> */}
                        <input type="text" id="first" name="firstname" value={formdata.firstname} onChange={func} required />
                        </div>
                        <div className="hy">
                        <label htmlFor="last">Last Name</label>
                       <input type="text" id="last" name="lastname" value={formdata.lastname} onChange={func} required />
                        </div>
                        <div className="hi">
                        <input type="checkbox" id='signn'/>
                        <label htmlFor="sign">Sign Up for Newsletter</label>
                        </div>
                        <div className="hi">
                        <input type="checkbox" id='signn'/>
                        <label htmlFor="sign">Allow remote shopping assistance</label>
                        </div>
                        </div>
                        <p>Sign-in Information</p>
                        <div className="name">
                        <label htmlFor="first">Email</label>
                        {/* <input type="email" id='first' name="last" value={formdata.email} onClick={func} required/> */}
                        <input type="email" id="first" name="email" value={formdata.email} onChange={func} required />
                        </div>
                        <div className="hy">
                        <label htmlFor="last">Password</label>
                        {/* <input type={formdata.showpassword? 'text':'password'} id='last' value={formdata.showpassword} onChange={func} required/> */}
                        <input type={formdata.showpassword ? "text" : "password"} id="last" name="password" value={formdata.password} onChange={func} required />
                        </div>
                        <div className="hy">
                        <label htmlFor="last"> Conform Password</label>
                        {/* <input type={formdata.showpassword ? 'text':'password'} id='last' value={formdata.confirmPassword} onChange={func} required/> */}
                        <input type={formdata.showpassword ? "text" : "password"} id="last" name="confirmPassword" value={formdata.confirmPassword} onChange={func} required />
                        </div>
                        <div className="hi">
                        <input type="checkbox" id='signn'  value={formdata.showpassword} onChange={showPasswordFunc} />
                        <label htmlFor="sign">Show Password</label>
                        </div>
                        <div className="btn">
                            <button onClick={handleSubmit}>Create an Account</button>
                        </div>
                    </form>
                    </div>
                 
                </div>
            </Create>
        </>
    )
}
export default CreateAccount;

// <h1>
// <span>
//     CREATE NEW CUSTOMER ACCOUNT
// </span>
// </h1>
// <div className="Information-container">
// <form action="http://localhost:3000/sign-up" method="post">
//     <div className="Information">
//         <legend>Personal Information</legend>
//         <label htmlFor="first">First Name</label>
//         <input type="text" id="first" name="firstname" value={formdata.firstname} onChange={func} required />
//         <label htmlFor="last">Last Name</label>
//         <input type="text" id="last" name="lastname" value={formdata.lastname} onChange={func} required />
//         <div className="field-choice">
//             <input type="checkbox" id="check1" />
//             <label htmlFor="check1">Sign Up For Newsletter</label>
//         </div>
//         <div className="field-choice btm">
//             <input type="checkbox" id="check2" />
//             <label htmlFor="check2">Allow remote shopping assistance</label>
//         </div>
//         <legend>Sign-in Information</legend>
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" value={formdata.email} onChange={func} required />
//         <label htmlFor="pass">Password</label>
//         <input type={formdata.showpassword ? "text" : "password"} id="pass" name="password" value={formdata.password} onChange={func} required />
//         <label htmlFor="confirm-pass">Confirm Password</label>
//         <input type={formdata.showpassword ? "text" : "password"} id="confirm-pass" name="confirmPassword" value={formdata.confirmPassword} onChange={func} required />
//         <div className="field-choice">
//             <input type="checkbox" id="check3" value={formdata.showpassword} onChange={showPasswordFunc} />
//             <label htmlFor="check3">Show Password</label>
//         </div>
//         <div className="field-choice">
//             <input type="checkbox" id="check4" required />
//             <label htmlFor="check4">I accept the <span>Privacy Policy</span></label>
//         </div>
//         <div className="field-choice">
//             <input type="checkbox" id="check5" required />
//             <label htmlFor="check5">I accept the <span>Terms & Conditions</span></label>
//         </div>
//         <div className="field-choice exception btm">
//             <input type="checkbox" id="check6" required />
//             <label htmlFor="check6">I agree to my personal data being stored and used to provide website services. (Order processing, comments, reviews, questions, testimonials)</label>
//         </div>
//         <button>
//             CREATE AN ACCOUNT
//         </button>
//     </div>
// </form>
// </div>
// </SignContainer >
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

#first ,#last{
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