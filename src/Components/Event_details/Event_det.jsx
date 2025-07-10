import React from 'react';
import { FaGift, FaArrowLeft } from 'react-icons/fa';
import Event_detCss from './../Event_details/Event_det.module.css';

export default function Event_det() {
    return (


        <div>
            {/* Navbar */}
            <div className={Event_detCss.navbar}>
                <div className={Event_detCss.left}>
                    <FaArrowLeft className={Event_detCss.backIcon} />
                    <FaGift className={Event_detCss.giftIcon} />
                    <span className={Event_detCss.title}>Shagun</span>
                </div>
                <div className={Event_detCss.right}>
                    <div className={`${Event_detCss.circle} ${Event_detCss.active}`}>1</div>
                    <div className={`${Event_detCss.circle} ${Event_detCss.active}`}>2</div>
                    <div className={`${Event_detCss.circle} ${Event_detCss.active}`}>3</div>
                    <div className={Event_detCss.circle}>4</div>
                    <div className={Event_detCss.check}>&#10003;</div>
                </div>
            </div>

        <div className={Event_detCss.container}>
            <div className={Event_detCss.card}>
                <h2 className={Event_detCss.heading}>Event Details</h2>

                <form>
                    <div className={Event_detCss.row}>
                        <div className={Event_detCss.inputGroup}>
                            <label>PIN Code (Venue) *</label>
                            <input type="text" placeholder="Enter venue PIN code" required />
                        </div>
                        <div className={Event_detCss.inputGroup}>
                            <label>Venue Name *</label>
                            <input type="text" required />
                        </div>
                    </div>

                    <div className={Event_detCss.inputGroup}>
                        <label>Venue Address *</label>
                        <textarea required></textarea>
                    </div>

                    <div className={Event_detCss.row}>
                        <div className={Event_detCss.inputGroup}>
                            <label>Event Date *</label>
                            <input type="date" required />
                        </div>
                        <div className={Event_detCss.inputGroup}>
                            <label>Start Time *</label>
                            <input type="time" required />
                        </div>
                        <div className={Event_detCss.inputGroup}>
                            <label>End Time *</label>
                            <input type="time" required />
                        </div>
                    </div>

                    <div className={Event_detCss.row}>
                        <div className={Event_detCss.inputGroup}>
                            <label>Event Number (Sl.No. in the same Venue) *</label>
                            <input
                                type="number"
                                placeholder="Event sequence number"
                                min="1"
                                step="1"
                                required
                                onKeyDown={(e) => {
                                    if (["e", "E", "+", "-"].includes(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <div className={Event_detCss.inputGroup}>
                            <label>Names of Hero/Heroine *</label>
                            <input type="text" placeholder="Enter names" required />
                        </div>
                    </div>

                    <button className={Event_detCss.button} type="submit">Continue</button>
                </form>
            </div>
        </div>
        </div>
    );
}
