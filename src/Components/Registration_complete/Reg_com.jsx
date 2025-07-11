import React from "react";
import Reg_comCss from "./../Registration_complete/Reg_com.module.css";
import {FaArrowLeft, FaCheck, FaCheckCircle, FaGift} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Budget_bankCss from "../Budget_bank/Budget_bank.module.css";

export default function Reg_com() {
    // const navigate = useNavigate();

    // Get project code from localStorage (adjust if you use props or context)
    // const projectCode = localStorage.getItem("projectCode");

    return (

        <div>


        {/* Navbar */}
    <div className={Reg_comCss.navbar}>
        <div className={Reg_comCss.left}>
            <FaArrowLeft className={Reg_comCss.backIcon} />
            <FaGift className={Reg_comCss.giftIcon} />
            <span className={Reg_comCss.title}>Shagun</span>
        </div>
        <div className={Reg_comCss.right}>
            <div className={`${Reg_comCss.circle} ${Reg_comCss.active}`}>1</div>
            <div className={`${Reg_comCss.circle} ${Reg_comCss.active}`}>2</div>
            <div className={`${Reg_comCss.circle} ${Reg_comCss.active}`}>3</div>
            <div className={`${Reg_comCss.circle} ${Reg_comCss.active}`}>4</div>
            <span className={`${Reg_comCss.circle} ${Reg_comCss.active}`}><FaCheck /></span>
        </div>
    </div>





    <div className={Reg_comCss.container}>
            <div className={Reg_comCss.card}>
                <FaCheckCircle className={Reg_comCss.successIcon} />
                <h2 className={Reg_comCss.heading}>Registration Complete!</h2>

                <div className={Reg_comCss.projectBox}>
                    <p className={Reg_comCss.projectText}>Your Project Code:</p>
                    {/*<p className={Reg_comCss.projectCode}>{projectCode}</p>*/}
                </div>

                <ul className={Reg_comCss.details}>
                    <li>✓ Registration fee: ₹2,161.6</li>
                    <li>✓ IoT machine will be deployed</li>
                    <li>✓ SMS notifications enabled</li>
                </ul>

                <button className={Reg_comCss.homeBtn} onClick={() => navigate("/")}>
                    Home
                </button>
            </div>
        </div>
        </div>
    );
}
