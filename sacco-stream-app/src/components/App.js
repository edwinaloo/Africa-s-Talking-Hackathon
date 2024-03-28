import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import DepositInstructions from './DepositInstructions';
import SavingGoal from './SavingGoal'; // Fixed typo in component import
import PaymentGatewayIntegration from './PaymentGatewayIntegration';
import AdminLoanApproval from './AdminLoanApproval';
import LoanApplicationForm from './LoanApplicationForm';
import LoanDetails from './LoanDetails';
import './App.css'; // Import the main CSS file

function App() {
  // Mock data for demonstration
  const [dashboardData, setDashboardData] = useState({ accountBalance: 5000, recentTransactions: [], loanStatus: 'Pending' });
  const [loanDetailsData, setLoanDetailsData] = useState({ amount: 10000, term: 12, purpose: 'Home Improvement', status: 'Approved', repaymentSchedule: 'Monthly' });

  // Fetch data for components that require it
  useEffect(() => {
    // Simulated API call to fetch dashboard data
    const fetchDashboardData = async () => {
      // Simulated response
      const response = {
        accountBalance: 5000,
        recentTransactions: [], // Replace with actual data if available
        loanStatus: 'Pending'
      };
      setDashboardData(response);
    };
    fetchDashboardData();

    // Simulated API call to fetch loan details data
    const fetchLoanDetailsData = async () => {
      // Simulated response
      const response = {
        amount: 10000,
        term: 12,
        purpose: 'Home Improvement',
        status: 'Approved',
        repaymentSchedule: 'Monthly'
      };
      setLoanDetailsData(response);
    };
    fetchLoanDetailsData();
  }, []);

  const alerts = ['New transaction', 'Loan approval'];

  return (
    <div className="App">
      <Dashboard data={dashboardData} />
      <DepositInstructions />
      <SavingGoal />
      <PaymentGatewayIntegration />
      <LoanApplicationForm />
      <AdminLoanApproval />
      <LoanDetails loan={loanDetailsData} />
    </div>
  );
}

export default App;
