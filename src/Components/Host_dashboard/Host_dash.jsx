import React from 'react';
import Host_dashCss from './../Host_dashboard/Host_dash.module.css';

const Host_dash = () => {
    return (
        <div className={Host_dashCss.container}>
            <div className={Host_dashCss.card}>
                {/*<div className={Host_dashCss.header}>*/}
                {/*    <button className={Host_dashCss.backButton}>&larr;</button>*/}
                {/*    <h2>SHAGUN</h2>*/}
                {/*</div>*/}

                <h3 className={Host_dashCss.subHeader}>Event Summary & Dashboard</h3>

                <div className={Host_dashCss.welcomeBox}>
                    <p>Welcome back,</p>
                    <h3>SHIVA PRASAD</h3>
                    <p className={Host_dashCss.userId}>User ID: 17986135753909948458</p>
                </div>

                <div className={Host_dashCss.projectCodeBox}>
                    <h4>📌 Project Code</h4>
                    <div className={Host_dashCss.code}>500019-20250708-0225-2</div>
                    <p className={Host_dashCss.codeInfo}>PIN + Date (YYYYMMDD) + Time (HHMM) + Event No.</p>
                </div>

                <div className={Host_dashCss.section}>
                    <h4>📋 Event Details</h4>
                    <ul className={Host_dashCss.detailsList}>
                        <li><strong>Event Type:</strong> Marriage</li>
                        <li><strong>Side:</strong> Bride</li>
                        <li><strong>Heroine Name:</strong> XYZ</li>
                        <li><strong>Event No.:</strong> 2</li>
                        <li><strong>Date:</strong> 2025-07-08</li>
                        <li><strong>Time:</strong> 02:25</li>
                        <li><strong>Venue:</strong> HOTEL GRAND SITARA</li>
                        <li><strong>Guests:</strong> 200</li>
                        <li><strong>Total Budget:</strong> ₹ 1,00,000</li>
                    </ul>
                </div>

                <div className={Host_dashCss.section}>
                    <h4>💲 Financial Overview</h4>
                    <ul className={Host_dashCss.detailsList}>
                        <li><strong>UPI Collected:</strong> ₹ 18,000</li>
                        <li><strong>Utilized Budget:</strong> ₹ 18,000</li>
                        <li><strong>Initial Platform Fee Paid:</strong> ₹ 5,000</li>
                        <li><strong>Recharge Payments:</strong> ₹ 0</li>
                    </ul>
                </div>

                <div className={Host_dashCss.section}>
                    <h4>📱 Your UPI Details for Gifts</h4>
                    <p>QR Code for "QR.jpg" would be displayed here from storage.</p>
                    <p><strong>UPI ID:</strong> shiva4sap1@okicici</p>
                    <p><strong>Bank A/C:</strong> 6123456789</p>
                    <p><strong>IFSC:</strong> ICIC0006306</p>
                    <small>These are your details for guests to send gifts via UPI.</small>
                </div>

                <div className={Host_dashCss.section}>
                    <h4>🎁 Envelope Usage</h4>
                    <p className={Host_dashCss.envelopeCount}>0/200</p>
                    <p className={Host_dashCss.note}>Number of envelopes disbursed from kiosk (Simulated).</p>
                    <input type="number" className={Host_dashCss.input} placeholder="Enter amount to extend budget" />
                    <button className={Host_dashCss.rechargeBtn}>Recharge Budget (Pay 5% Service Fee)</button>
                </div>

                <div className={Host_dashCss.section}>
                    <h4>🧾 Guests Who Paid</h4>
                    <p>List of guests who paid via UPI will appear here. (Future Feature)</p>
                    <ul className={Host_dashCss.paidList}>
                        <li>Guest Name 1 - ₹500</li>
                        <li>Guest Name 2 - ₹1000</li>
                        <li>Guest Name 3 - ₹200</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Host_dash;
