import React, { useState } from 'react';

const PaymentPage = () => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        amount: '',
        fullName: '',
        paymentMethod: 'card', // Default payment method
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
       
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(paymentData);
        setIsSubmitting(false);
    };

    return (
        <div className="container">
            <h1 className="text-center my-4 h1-ubuntu">Payment Page</h1>
            <div className="payment-box">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" name="fullName" value={paymentData.fullName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="text" className="form-control" id="amount" name="amount" value={paymentData.amount} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block">Payment Method</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="paymentMethodCard" value="card" checked={paymentData.paymentMethod === 'card'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="paymentMethodCard">
                                Card Payment
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="paymentMethodCOD" value="cod" checked={paymentData.paymentMethod === 'cod'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="paymentMethodCOD">
                                UPI
                            </label>
                        </div>
                    </div>
                    {paymentData.paymentMethod === 'card' && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} maxLength={16} required />
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                    <input type="text" className="form-control" id="expiryDate" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} placeholder="MM/YY" pattern="\d{2}/\d{2}" required />
                                </div>
                                <div className="col">
                                    <label htmlFor="cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cvv" name="cvv" value={paymentData.cvv} onChange={handleChange} maxLength={3} required />
                                </div>
                            </div>
                        </>
                    )}
                    <center>
                        <button type="submit" className="btn btn-primary position-relative" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Proceed to Pay
                            {isSubmitting && (
                                <img src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif" alt="Loading" style={{ width: '50px', height: '50px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                            )}
                        </button>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
