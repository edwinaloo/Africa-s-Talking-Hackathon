import React, { useState } from 'react';
// import './LoanApplicationForm.css'; // Import the CSS file for styling

const LoanApplicationForm = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [term, setTerm] = useState('');
    const [purpose, setPurpose] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (loanAmount <= 0 || term <= 0 || purpose.trim() === '') {
            alert('Please fill in all fields with valid values.');
            return;
        }
        // Logic to submit loan application (replace with actual logic)
        console.log('Loan application submitted:', { loanAmount, term, purpose });
        setSubmitted(true);
        // Clear form fields after submission
        setLoanAmount('');
        setTerm('');
        setPurpose('');
    };

    return (
        <div className="loan-application-form">
            <h2>Loan Application Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="loanAmount">Loan Amount:</label>
                <input 
                    type="number" 
                    id="loanAmount" 
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)} 
                    required 
                />
                <label htmlFor="term">Term (in months):</label>
                <input 
                    type="number" 
                    id="term" 
                    value={term}
                    onChange={(e) => setTerm(e.target.value)} 
                    required 
                />
                <label htmlFor="purpose">Purpose:</label>
                <textarea 
                    id="purpose" 
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)} 
                    required 
                />
                <button type="submit">Submit Application</button>
            </form>
            {submitted && <p className="success-message">Application submitted successfully!</p>}
        </div>
    );
};

export default LoanApplicationForm;
