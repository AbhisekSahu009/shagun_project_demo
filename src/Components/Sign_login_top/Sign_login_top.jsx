import React from 'react';
import Sign_login_topCss from './../Sign_login_top/Sign_login_top.module.css';
import logo from './../../assets/react.svg'; // Replace with the correct path to your logo

function Sign_login_top() {
    return (
        <div className={Sign_login_topCss.topBar}>
            <a href="#" className={Sign_login_topCss.backButton}>
                &#8592; Back to Home
            </a>
            <img src={logo} alt="Shagun Logo" className={Sign_login_topCss.logo} />
        </div>
    );
}

export default Sign_login_top;
