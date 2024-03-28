import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import Dashboard from './Dashboard';
import DepositInstructions from './DepositInstructions';
import SavingGoal from './SavingGoal';
import PaymentGatewayIntegration from './PaymentGatewayIntegration';
import AdminLoanApproval from './AdminLoanApproval';
import LoanApplicationForm from './LoanApplicationForm';
import LoanDetails from './LoanDetails';
import NavigationBar from './NavigationBar';
import './App.css';

function App() {
  // States to store data fetched from the Django backend
  const [dashboardData, setDashboardData] = useState({ accountBalance: 0, recentTransactions: [], loanStatus: '' });
  const [loanDetailsData, setLoanDetailsData] = useState({ amount: 0, term: 0, purpose: '', status: '', repaymentSchedule: '' });

  // Function to fetch dashboard data from the Django backend
  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/dashboard/');
      setDashboardData(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  // Function to fetch loan details data from the Django backend
  const fetchLoanDetailsData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/loandetails/');
      setLoanDetailsData(response.data);
    } catch (error) {
      console.error('Error fetching loan details data:', error);
    }
  };

  // Fetch data from the Django backend when the component mounts
  useEffect(() => {
    fetchDashboardData();
    fetchLoanDetailsData();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
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
