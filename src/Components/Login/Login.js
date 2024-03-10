import React from 'react';
import Icon from "../../Images/logo.png"

function Login(props) {
    return (
        <div className="card">
            <div className="register">
                <img src={Icon} alt=""/>
                <h2>Welcome Back</h2>
                <div className="form">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button className="form_btn">Login</button>
                <p> <span className="form_span">New in this site ?</span> Create New Account</p>
            </div>

        </div>
    );
}

export default Login;