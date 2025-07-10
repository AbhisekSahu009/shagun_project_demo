import React, { useState } from 'react';
import Mvp_demoCss from './../Mvp_demo/Mvp_demo.module.css';

const Mvp_demo = () => {
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [envelopesUsed, setEnvelopesUsed] = useState(0);
    const [notification, setNotification] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setAmount(value);
        }
    };

    const showNotification = (envelope, amt) => {
        setNotification(`Envelope #${envelope} dispensed! ₹${amt} received`);
        setTimeout(() => {
            setNotification(null);
        }, 4000);
    };

    const handlePay = () => {
        if (!amount || parseInt(amount) <= 0) return;
        const envelope = Math.floor(Math.random() * 200) + 1;
        const newTransaction = {
            guest: `Guest ${transactions.length + 1}`,
            envelope,
            amount: parseInt(amount),
            time: new Date().toLocaleTimeString(),
        };
        const updatedTransactions = [newTransaction, ...transactions];
        setTransactions(updatedTransactions);
        setTotalAmount((prev) => prev + parseInt(amount));
        setEnvelopesUsed((prev) => prev + 1);
        showNotification(envelope, amount);
        setAmount('');
    };

    const handleReset = () => {
        setTransactions([]);
        setTotalAmount(0);
        setEnvelopesUsed(0);
        setAmount('');
    };

    const generateRandomAmount = () => {
        const options = [101, 501, 1001, 556, 5560];
        return options[Math.floor(Math.random() * options.length)];
    };

    const handleGenerateTransactions = () => {
        const generated = Array.from({ length: 15 }, (_, i) => {
            const envelope = Math.floor(Math.random() * 200) + 1;
            return {
                guest: `Guest ${transactions.length + i + 1}`,
                envelope,
                amount: generateRandomAmount(),
                time: new Date().toLocaleTimeString(),
            };
        });
        setTransactions((prev) => [...generated, ...prev]);
        setTotalAmount((prev) =>
            prev + generated.reduce((sum, t) => sum + t.amount, 0)
        );
        setEnvelopesUsed((prev) => prev + 15);
    };

    const avgAmount =
        transactions.length > 0
            ? Math.floor(totalAmount / transactions.length)
            : 0;

    return (
        <div className={Mvp_demoCss.container}>
            <h1 className={Mvp_demoCss.heading}>Shagun MVP Demo & Testing</h1>
            <p className={Mvp_demoCss.subheading}>
                Test your IoT vending concept without real machines
            </p>

            <div className={Mvp_demoCss.statusBar}>
                <span className={Mvp_demoCss.liveTag}>🟢 Live Demo</span>
                <span className={Mvp_demoCss.projectId}>
          Project: DEMO40000125062512000001
        </span>
            </div>

            <div className={Mvp_demoCss.stats}>
                <div className={Mvp_demoCss.statBox}>
                    <div>
                        <p>Envelopes Used</p>
                        <h3 className={Mvp_demoCss.used}>{envelopesUsed}/100</h3>
                    </div>
                    <span>🎁</span>
                </div>
                <div className={Mvp_demoCss.statBox}>
                    <div>
                        <p>Total Amount</p>
                        <h3 className={Mvp_demoCss.total}>₹{totalAmount.toLocaleString()}</h3>
                    </div>
                    <span>₹</span>
                </div>
                <div className={Mvp_demoCss.statBox}>
                    <div>
                        <p>Machine Battery</p>
                        <h3 className={Mvp_demoCss.battery}>85%</h3>
                    </div>
                    <span>📱</span>
                </div>
                <div className={Mvp_demoCss.statBox}>
                    <div>
                        <p>Avg. Amount</p>
                        <h3 className={Mvp_demoCss.avg}>₹{avgAmount.toLocaleString()}</h3>
                    </div>
                    <span>📈</span>
                </div>
            </div>

            <div className={Mvp_demoCss.main}>
                <div className={Mvp_demoCss.simulator}>
                    <h2>📱 Guest Transaction Simulator</h2>
                    <p>
                        Enter amount to simulate a guest scanning QR and making payment
                    </p>
                    <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={amount}
                        onChange={handleInputChange}
                        className={Mvp_demoCss.input}
                        placeholder="Enter Amount"
                    />
                    <button onClick={handlePay} className={Mvp_demoCss.payBtn}>
                        Pay & Get Envelope
                    </button>

                    <div className={Mvp_demoCss.btnGroup}>
                        <button onClick={handleGenerateTransactions}>
                            Generate 15 Test Transactions
                        </button>
                        <button onClick={handleReset}>Reset Demo</button>
                    </div>

                    <div className={Mvp_demoCss.tips}>
                        <b>🛈 MVP Testing Tips</b>
                        <p>
                            Use different amounts (₹101, ₹501, ₹1001) to test various
                            scenarios. Share this demo with potential hosts for feedback.
                        </p>
                    </div>
                </div>

                <div className={Mvp_demoCss.transactions}>
                    <h2>👥 Live Transactions</h2>
                    <div className={Mvp_demoCss.txList}>
                        {transactions.length === 0 ? (
                            <p className={Mvp_demoCss.noTx}>
                                🎁 No transactions yet
                                <br />
                                Start simulating guest payments
                            </p>
                        ) : (
                            transactions.map((t, i) => (
                                <div key={i} className={Mvp_demoCss.tx}>
                                    <div>
                                        <b>{t.guest}</b>
                                        <p>Envelope #{t.envelope}</p>
                                    </div>
                                    <div className={Mvp_demoCss.amount}>
                                        ₹{t.amount.toLocaleString()}
                                    </div>
                                    <div className={Mvp_demoCss.time}>{t.time}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {notification && (
                <div className={Mvp_demoCss.notification}>✅ {notification}</div>
            )}
        </div>
    );
};

export default Mvp_demo;
