import React from 'react'
import styled from 'styled-components'
import './Login.css'
import loginImg from '../assets/loginImg.jpg'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="containerLeft">
                    <img src={loginImg} alt="img" className='img' />
                </div>

                <div className="containerRight">
                    <div className="rightContents">
                        <div className="loginDetails">
                            <h2 className="loginTitle">Login</h2>

                            <div className="loginInput">
                                <label htmlFor="">Login ID</label> <br />
                                <input type="text" className='input2' placeholder='Enter Login ID' />
                            </div>

                            <div className="passInput">
                                <label htmlFor="">Password</label><br />
                                <input type="email" className='input2' placeholder='Enter Password' />
                                <div className="passChange">
                                    <a href="" >Change Password</a>
                                </div>
                            </div>

                            <div className="checkBox">
                                <input type="checkbox" value="Remember Me" className='input'/>
                                <label htmlFor="Remember Me">Remember Me</label> <br />

                                <input type="checkbox" value="Agree to Terms & Conditions" className='input'/>
                                <label htmlFor="Agree to Terms & Conditions">Agree to <a href="">Terms & Conditions</a></label>
                            </div>

                            <div className="btn">
                                <button className='loginBtn'>Login</button>
                                {/* <br /> */}
                            </div>
                            <p className='p'>Don't have an account? <a href="">Register Here</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
