import React, { useState } from 'react';
import Sign_loginCss from './../Sign_login/Sign_login.module.css';

const Sign_login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleToggle = (mode) => {
        setIsLogin(mode === 'login');
        setFormData({ fullName: '', email: '', password: '' });
        setErrors({});
    };

    const validate = () => {
        const newErrors = {};
        if (!isLogin && !formData.fullName.trim()) {
            newErrors.fullName = 'Please enter your full name';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Enter a valid email';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Please enter your password';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Minimum 6 characters required';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        alert(`${isLogin ? 'Logged in' : 'Account created'} successfully!`);
    };

    return (
        <div className={Sign_loginCss.wrapper}>
            {/*<div className={Sign_loginCss.topBar}>*/}
            {/*    <a href="#" className={Sign_loginCss.backLink}>← Back to Home</a>*/}
            {/*    <div className={Sign_loginCss.logo}>Shagun</div>*/}
            {/*</div>*/}


            <div className={Sign_loginCss.form_top}>
                <h2 className={Sign_loginCss.heading}>Host Account</h2>
                <p className={Sign_loginCss.subHeading}>Login or create an account to manage your events</p>
            </div>

            <div className={Sign_loginCss.formContainer}>

                <div className={Sign_loginCss.tabSwitch}>
                    <button
                        className={`${Sign_loginCss.tab} ${isLogin ? Sign_loginCss.activeTab : ''}`}
                        onClick={() => handleToggle('login')}
                    >
                        <span>⇨</span> Login
                    </button>
                    <button
                        className={`${Sign_loginCss.tab} ${!isLogin ? Sign_loginCss.activeTab : ''}`}
                        onClick={() => handleToggle('signup')}
                    >
                        👤 Sign Up
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={Sign_loginCss.form}>
                    {!isLogin && (
                        <div className={Sign_loginCss.inputGroup}>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                            {errors.fullName && <span className={Sign_loginCss.error}>{errors.fullName}</span>}
                        </div>
                    )}

                    <div className={Sign_loginCss.inputGroup}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <span className={Sign_loginCss.error}>{errors.email}</span>}
                    </div>

                    <div className={Sign_loginCss.inputGroup}>
                        <div className={Sign_loginCss.passwordField}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <span
                                className={Sign_loginCss.toggleEye}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                {showPassword ? '👁️' : '🙈'}
              </span>
                        </div>
                        {errors.password && <span className={Sign_loginCss.error}>{errors.password}</span>}
                    </div>

                    <button type="submit" className={Sign_loginCss.submitBtn}>
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>


            </div>

            <div className={Sign_loginCss.form_bottom}>
                <p className={Sign_loginCss.bottomLink}>
                    Need to register as a host first? <a href="#">Complete Host Registration</a>
                </p>
            </div>
        </div>
    );
};

export default Sign_login;
