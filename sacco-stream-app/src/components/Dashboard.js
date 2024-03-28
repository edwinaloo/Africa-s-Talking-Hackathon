import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import the dashboard.css file

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [accountBalance, setAccountBalance] = useState(0);
    const [recentTransactions, setRecentTransactions] = useState([]);
    const [loanStatus, setLoanStatus] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/dashboard');
                setAccountBalance(response.data.accountBalance);
                setRecentTransactions(response.data.recentTransactions);
                setLoanStatus(response.data.loanStatus);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-heading">Dashboard</h2>
            <p className="account-balance">Account Balance: ${accountBalance}</p>
            {recentTransactions.length > 0 ? (
                <>
                    <h3>Recent Transactions:</h3>
                    <ul className="recent-transactions">
                        {recentTransactions.map(transaction => (
                            <li key={transaction.id} className="recent-transaction-item">{transaction.description}: ${transaction.amount}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No recent transactions.</p>
            )}
            <p className="loan-status">Loan Status: {loanStatus}</p>
        </div>
    );
};

export default Dashboard;
