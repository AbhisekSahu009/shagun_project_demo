import React from 'react';
import Mobile_verCss from './../Mobile_verification/Mobile_ver.module.css';
import giftIcon from './../../assets/react.svg'; // Replace with actual gift icon
import phoneIcon from './../../assets/react.svg'; // Replace with actual phone icon
import { FaArrowLeft, FaCheck, FaGift } from "react-icons/fa";

export default function Mobile_ver() {
    return (
        <div className={Mobile_verCss.wrapper}>
            {/* Navbar */}
            <div className={Mobile_verCss.navbar}>
                <div className={Mobile_verCss.left}>
                    <FaArrowLeft className={Mobile_verCss.backIcon} />
                    <FaGift className={Mobile_verCss.giftIcon} />
                    <span className={Mobile_verCss.titlenav}>Shagun</span>
                </div>
                <div className={Mobile_verCss.right}>
                    <div className={`${Mobile_verCss.circle} ${Mobile_verCss.active}`}>1</div>
                    <div className={Mobile_verCss.step}>2</div>
                    <div className={Mobile_verCss.step}>3</div>
                    <div className={Mobile_verCss.step}>4</div>
                    <span className={Mobile_verCss.step}><FaCheck /></span>
                </div>
            </div>

            {/* Form Card */}
            <div className={Mobile_verCss.container}>
                <div className={Mobile_verCss.card}>
                    <div className={Mobile_verCss.icons}>
                        <img src={giftIcon} alt="gift" className={Mobile_verCss.icon} />
                        <img src={phoneIcon} alt="phone" className={Mobile_verCss.icon} />
                    </div>
                    <h2 className={Mobile_verCss.title}>Mobile Verification</h2>
                    <label className={Mobile_verCss.label}>Mobile Number *</label>
                    <input className={Mobile_verCss.input} type="text" placeholder="Enter 10-digit mobile number" />
                    <label className={Mobile_verCss.label}>Email (Optional)</label>
                    <input className={Mobile_verCss.input} type="email" placeholder="Enter email address" />
                    <button className={Mobile_verCss.sendBtn}>Send OTP</button>
                    <label className={Mobile_verCss.label}>Enter OTP</label>
                    <input className={Mobile_verCss.input} type="text" placeholder="Enter 6-digit OTP" />
                    <button className={Mobile_verCss.verifyBtn}>Verify OTP</button>
                </div>
            </div>
        </div>
    );
}
