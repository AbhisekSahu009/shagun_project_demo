import React, { useState } from 'react';
import Personal_detCss from './../Personal_details/Personal_det.module.css';
import { FaUpload, FaArrowLeft, FaGift, FaCheck } from 'react-icons/fa';

export default function Personal_det() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div className={Personal_detCss.page}>
            {/* Navigation Bar */}
            <div className={Personal_detCss.navbar}>
                <div className={Personal_detCss.leftNav}>
                    <FaArrowLeft className={Personal_detCss.navIcon} />
                    <FaGift className={Personal_detCss.giftIcon} />
                    <span className={Personal_detCss.brandName}>Shagun</span>
                </div>
                <div className={Personal_detCss.rightNav}>
                    <span className={`${Personal_detCss.step} ${Personal_detCss.active}`}>1</span>
                    <span className={`${Personal_detCss.step} ${Personal_detCss.active}`}>2</span>
                    <span className={Personal_detCss.step}>3</span>
                    <span className={Personal_detCss.step}>4</span>
                    <span className={Personal_detCss.step}><FaCheck /></span>
                </div>
            </div>

            {/* Main Form Section */}
            <div className={Personal_detCss.background}>
                <div className={Personal_detCss.container}>
                    <h2 className={Personal_detCss.heading}>Personal Details</h2>

                    <label className={Personal_detCss.label}>Full Name *</label>
                    <input type="text" className={Personal_detCss.input} />

                    <label className={Personal_detCss.label}>Type of Event *</label>
                    <select className={Personal_detCss.select}>
                        <option value="">Select Event Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="corporate">Corporate</option>
                    </select>

                    <label className={Personal_detCss.label}>Upload Event Card (Optional)</label>
                    <div className={Personal_detCss.uploadBox} onClick={() => document.getElementById('fileInput').click()}>
                        <FaUpload className={Personal_detCss.uploadIcon} />
                        <p>{selectedFile ? selectedFile.name : 'Click to upload event card'}</p>
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*,.pdf,.doc,.docx"
                            className={Personal_detCss.hiddenInput}
                            onChange={handleFileChange}
                        />
                    </div>

                    <button className={Personal_detCss.button}>Continue</button>
                </div>
            </div>
        </div>
    );
}
