import React from 'react';
// import './LoanDetails.css'; // Import the CSS file for styling

const LoanDetails = ({ loan }) => {
    return (
        <div className="loan-details">
            <h2>Loan Details</h2>
            <p><strong>Amount:</strong> ${loan.amount.toLocaleString()}</p>
            <p><strong>Term:</strong> {loan.term} months</p>
            {loan.purpose && <p><strong>Purpose:</strong> {loan.purpose}</p>}
            <p><strong>Status:</strong> {loan.status}</p>
            {loan.repaymentSchedule && <p><strong>Repayment Schedule:</strong> {loan.repaymentSchedule}</p>}
        </div>
    );
};

export default LoanDetails;
