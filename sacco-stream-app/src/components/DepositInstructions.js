import React from 'react';
// import './DepositInstructions.css'; // Import the CSS file for styling

const DepositInstructions = () => {
    return (
        <div className="deposit-instructions-container">
            <h2 className="instruction-heading">Deposit Instructions</h2>
            <p>
                To deposit cash into your SACCO Wallet, please follow these instructions:
            </p>
            <ol>
                <li>Prepare the cash amount you wish to deposit.</li>
                <li>Visit the nearest SACCO branch or authorized agent location.</li>
                <li>Fill out a deposit slip with your SACCO account details.</li>
                <li>Hand over the cash and the deposit slip to the teller or agent.</li>
                <li>Ensure you receive a receipt as proof of the deposit.</li>
                <li>Once the deposit is processed, the funds will be credited to your SACCO Wallet.</li>
            </ol>
            <p>
                If you have any questions or need assistance, feel free to contact our customer support.
            </p>
        </div>
    );
};

export default DepositInstructions;
