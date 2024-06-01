import React, { useState } from 'react';
// import './SavingGoal.css'; // Import the CSS file for styling

const SavingGoal = () => {
    const [goalAmount, setGoalAmount] = useState(0);
    const [goalSet, setGoalSet] = useState(false);

    const handleSetGoal = (e) => {
        e.preventDefault();
        // Add validation logic
        if (goalAmount > 0) {
            // Logic for setting savings goal
            setGoalSet(true);
        } else {
            alert('Please enter a valid goal amount.');
        }
    };

    const handleClearGoal = () => {
        setGoalAmount(0);
        setGoalSet(false);
    };

    return (
        <div className="savings-goal">
            <h2>Saving Goal</h2>
            <form onSubmit={handleSetGoal}>
                <label htmlFor="goalAmount">Goal Amount:</label>
                <input 
                    type="number" 
                    id="goalAmount" 
                    name="goalAmount" 
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value)} 
                    required 
                />
                <button type="submit">Set Goal</button>
                {goalSet && <p className="success-message">Goal set successfully!</p>}
                <button type="button" onClick={handleClearGoal}>Clear Goal</button>
            </form>
        </div>
    );
};

export default SavingGoal;
