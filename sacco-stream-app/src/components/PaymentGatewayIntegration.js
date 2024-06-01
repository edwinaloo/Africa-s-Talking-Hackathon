import React, { useState } from 'react';
// import './PaymentGatewayIntegration.css'; // Import the CSS file for styling

const PaymentGatewayIntegration = () => {
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState(null);

    const handlePayment = () => {
        setLoading(true);
        // Simulate payment processing (replace with actual logic)
        setTimeout(() => {
            setLoading(false);
            // Simulate payment success
            alert('Payment successful!');
        }, 2000); // Simulate 2 seconds delay
    };

    return (
        <div className="payment-gateway-integration">
            <h2>Payment Gateway Integration</h2>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Make Payment'}
            </button>
            {paymentError && <p className="error-message">{paymentError}</p>}
        </div>
    );
};

export default PaymentGatewayIntegration;
