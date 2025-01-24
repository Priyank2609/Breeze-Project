import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch ,useSelector} from 'react-redux';
import { setCredentials } from '../slice/userSlice';


const SignIn = () => {
  //    const initialFormData = {
  //     email: '',
  //     password: '',
  //     showpassword: false,
  //    };

  const formdata = useRef();
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [signinError, setSignInError] = useState({});

  const validate = (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!data.email) {
      errors.email = "Email is require";
    } else if (!regex.test(data.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!data.password) {
      errors.password = "Password is require";
    } else if (data.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (data.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  const formSubmit = async (event) => {
    event.preventDefault();

    const dataInfo = {
      email: formdata.current.email.value,
      password: formdata.current.password.value,
    };

    const errors = validate(dataInfo);

    if (Object.keys(errors).length === 0) {
      axios
        .post(
          "http://localhost:2000/users/auth",
          { dataInfo },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          dispatch(setCredentials({ ...res.data }));
          navigate("/");
        });
    } else {
      console.log("A occurred try again later ");
    }
  };
  return (
    <>
      <Sign>
        <form
          ref={formdata}
          method="post"
          action="http://localhost:2000/users/auth"
          onSubmit={formSubmit}
        >
          <div className="main">
            <div className="div">
              <h1>customer login</h1>
            </div>

            <div className="login">
              <div className="log">
                <h4>Registered Customers</h4>

                <p>If you have an account, sign in with your email address.</p>
                <div className="mail">
                  <label htmlFor="email">Email</label>

                  <input type="email" id="email" name="email" />
                  <p>{signinError.email}</p>
                </div>
                <div className="pass">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    name="password"
                  />
                  <p>{signinError.password}</p>
                </div>
                <div className="show">
                  <input
                    type="checkbox"
                    id="showpass"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  />

                  <label htmlFor="show password">Show Password</label>
                </div>
                <div className="btn">
                  <button type="submit">Sign In</button>
                  <a href="/forget">
                    <p>Forget Your Password?</p>
                  </a>
                </div>
              </div>
              <div className="cont">
                <h4>New Customers</h4>
                <p>
                  Creating an account has many benefits: check out faster, keep
                  more than one address, track orders and more.
                </p>
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
  );
}
export default SignIn;

export const Sign = styled.div`
  position: relative;
  max-width: 1260px;
  margin: 0 auto;
  .main {
    padding: 10px 8px 32px 8px;
  }
  .div {
    margin: 64px 0;
  }
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.24rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
    text-align: center;
  }

  .login {
    padding: 40px 48px;
    margin: 0 auto;

    box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.1),
      0 1px 6px rgba(0, 0, 0, 0.05);

    border: 3px solid #000;
    border-width: 3px 0 0;
    border-radius: 0.25rem;
    @media (min-width: 768px) {
      display: flex;
      gap: 3rem;
    }
    @media (max-width: 639px) {
      padding: 16px 24px;
    }
    @media (min-width: 640px) {
      max-width: 640px;
    }
    @media (min-width: 768px) {
      max-width: 768px;
    }
    @media (min-width: 1024px) {
      max-width: 1024px;
      margin: 0 auto;
    }
  }

  h4 {
    margin-bottom: 12px;
    padding: 12px 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    color: rgb(17 24 39 / 60%);
  }
  #email,
  #password {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 2px solid rgb(17 24 39);
    background-color: rgb(255 255 255);
    border-radius: 0.25rem;
  }

  .mail {
    margin-top: 12px;
    P {
      color: red;
    }
  }
  .pass {
    margin-top: 12px;
    P {
      color: red;
    }
  }
  .show {
    margin-top: 12px;
    display: flex;
    gap: 0.375rem;
    align-items: center;
  }
  #showpass {
    margin-top: 2px;
  }
  button {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1.25rem;
    gap: 0.25rem;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .btn {
    display: flex;
    gap: 0.5rem;
    margin: 20px 0;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    p {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  a {
    text-decoration: none;
    p {
      color: rgb(29 78 216 / 85%);
    }
  }

  .cont {
    p {
      color: #000;
    }
    @media (min-width: 768px) {
      flex-grow: 1;
      flex-basis: 0;
      margin: 0 !important;
    }
  }
`;