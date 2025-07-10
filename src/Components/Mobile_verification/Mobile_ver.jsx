import React from 'react';
import Mobile_verCss from './../Mobile_verification/Mobile_ver.module.css';
import giftIcon from './../../assets/react.svg'; // Replace with actual gift icon
import phoneIcon from './../../assets/react.svg'; // Replace with actual phone icon
import backIcon from './../../assets/react.svg'; // Replace with actual back icon

export default function Mobile_ver() {
    return (
        <div className={Mobile_verCss.wrapper}>
            <nav className={Mobile_verCss.navbar}>
                <div className={Mobile_verCss.navLeft}>
                    <img src={backIcon} alt="back" className={Mobile_verCss.backIcon} />
                    <img src={giftIcon} alt="logo" className={Mobile_verCss.logoIcon} />
                    <span className={Mobile_verCss.appName}>Shagun</span>
                </div>
                <div className={Mobile_verCss.steps}>
                    <span className={`${Mobile_verCss.step} ${Mobile_verCss.active}`}>1</span>
                    <span className={Mobile_verCss.step}>2</span>
                    <span className={Mobile_verCss.step}>3</span>
                    <span className={Mobile_verCss.step}>4</span>
                    <span className={Mobile_verCss.step}>✓</span>
                </div>
            </nav>

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
