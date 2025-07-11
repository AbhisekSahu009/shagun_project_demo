import React, { useState, useEffect } from 'react';
import Budget_bankCss from './../Budget_bank/Budget_bank.module.css';
import {FaInfoCircle, FaCreditCard, FaArrowLeft, FaGift, FaCheck} from 'react-icons/fa';
import Event_detCss from "../Event_details/Event_det.module.css";

export default function Budget_bank() {
    const [formData, setFormData] = useState({
        members: '',
        amount: '',
        accountNumber: '',
        holderName: '',
        bankName: '',
        branchName: '',
        ifsc: '',
        accepted: false,
    });

    const [platformFee, setPlatformFee] = useState(0);
    const fixedFee = 2000;
    const [totalFee, setTotalFee] = useState(0);

    useEffect(() => {
        const budget = parseFloat(formData.amount || 0);
        const pf = budget * 0.05;
        setPlatformFee(pf);
        setTotalFee(pf + fixedFee);
    }, [formData.amount]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.accepted) {
            alert("Please accept the terms and conditions.");
            return;
        }
        // Submit logic here
        console.log("Form submitted:", formData);
    };

    return (


        <div>

            {/* Navbar */}
        <div className={Budget_bankCss.navbar}>
            <div className={Budget_bankCss.left}>
                <FaArrowLeft className={Budget_bankCss.backIcon} />
                <FaGift className={Budget_bankCss.giftIcon} />
                <span className={Budget_bankCss.title}>Shagun</span>
            </div>
            <div className={Budget_bankCss.right}>
                <div className={`${Budget_bankCss.circle} ${Budget_bankCss.active}`}>1</div>
                <div className={`${Budget_bankCss.circle} ${Budget_bankCss.active}`}>2</div>
                <div className={`${Budget_bankCss.circle} ${Budget_bankCss.active}`}>3</div>
                <div className={`${Budget_bankCss.circle} ${Budget_bankCss.active}`}>4</div>
                <span className={Budget_bankCss.step}><FaCheck /></span>
            </div>
        </div>


        <form className={Budget_bankCss.container} onSubmit={handleSubmit}>
            <h2 className={Budget_bankCss.heading}>Budget & Bank Details</h2>
            <div className={Budget_bankCss.row}>
                <div className={Budget_bankCss.inputGroup}>
                    <label>Expected Members *</label>
                    <select
                        name="members"
                        value={formData.members}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Members</option>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className={Budget_bankCss.inputGroup}>
                    <label>Budget Amount (₹) *</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter budget amount"
                        required
                    />
                </div>
            </div>

            {formData.amount && (
                <div className={Budget_bankCss.feeCard}>
                    <h4>Service Fee Structure</h4>
                    <p>Event Budget Amount: ₹{parseFloat(formData.amount).toLocaleString()}</p>
                    <p>Platform Fee (5% of budget): ₹{platformFee.toFixed(1)}</p>
                    <p>Fixed Service Charges: ₹{fixedFee.toLocaleString()}</p>
                    <hr />
                    <p className={Budget_bankCss.totalFee}>
                        Total Service Fee: ₹{totalFee.toFixed(1)}
                    </p>

                    <div className={Budget_bankCss.refundCard}>
                        <h5><FaInfoCircle /> Refund Policy</h5>
                        <p><strong>Important:</strong> If guests do not utilize any amount from our kiosk during your event, only the fixed service charge of ₹2,000 will be deducted. The remaining amount of ₹{platformFee.toFixed(1)} will be refunded to your registered bank account within 3–5 business days.</p>
                    </div>
                </div>
            )}

            <h4 className={Budget_bankCss.subHeading}>🧾 Bank Account Details (Required) *</h4>
            <div className={Budget_bankCss.row}>
                <div className={Budget_bankCss.inputGroup}>
                    <label>Bank Account Number *</label>
                    <input
                        type="number"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        placeholder="Enter account number"
                        required
                    />
                </div>
                <div className={Budget_bankCss.inputGroup}>
                    <label>Account Holder Name *</label>
                    <input
                        type="text"
                        name="holderName"
                        value={formData.holderName}
                        onChange={handleChange}
                        placeholder="Enter account holder name"
                        required
                    />
                </div>
            </div>
            <div className={Budget_bankCss.row}>
                <div className={Budget_bankCss.inputGroup}>
                    <label>Bank Name *</label>
                    <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                        placeholder="Enter bank name"
                        required
                    />
                </div>
                <div className={Budget_bankCss.inputGroup}>
                    <label>Branch Name *</label>
                    <input
                        type="text"
                        name="branchName"
                        value={formData.branchName}
                        onChange={handleChange}
                        placeholder="Enter branch name"
                        required
                    />
                </div>
            </div>
            <div className={Budget_bankCss.row}>
                <div className={Budget_bankCss.inputGroupFull}>
                    <label>IFSC Code *</label>
                    <input
                        type="text"
                        name="ifsc"
                        value={formData.ifsc}
                        onChange={handleChange}
                        placeholder="Enter IFSC code"
                        required
                    />
                </div>
            </div>

            <div className={Budget_bankCss.checkboxGroup}>
                <input
                    type="checkbox"
                    name="accepted"
                    checked={formData.accepted}
                    onChange={handleChange}
                    required
                />
                <label>I accept the terms and conditions *</label>
            </div>

            <p className={Budget_bankCss.terms}>
                • Indian tax rules apply • Damages to vending machine will be charged • Account
                settlement may take 1–3 days • Company liability limitations apply • All disputes are
                subject to Hyderabad, Telangana jurisdiction only • Final decision of the company
                will be binding and must be obeyed by the host • Host agrees to comply with all legal
                matters as per company policies
            </p>

            <button
                type="submit"
                className={Budget_bankCss.submitBtn}
                disabled={!formData.accepted}
            >
                Complete Registration
            </button>

            {formData.amount && (
                <div className={Budget_bankCss.payCard}>
                    <h4><FaCreditCard /> Pay Service Fee: ₹{totalFee.toFixed(1)}</h4>
                    <p>Amount to be charged: <strong>₹{totalFee.toFixed(1)}</strong></p>
                    <button type="button" className={Budget_bankCss.payNowBtn}>
                        Click for quick payment via Razorpay
                    </button>
                </div>
            )}
        </form>
        </div>
    );
}
