import React, { useEffect, useState } from 'react';
import './Receipt.css';

function Receipt() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Here you would fetch data from the NY State of Health API
    const samplePlans = [
      'Health Plan 1',
      'Health Plan 2',
      'Health Plan 3',
    ];
    setPlans(samplePlans);
  }, []);

  return (
    <div className="receipt">
      <h2>Your Health Plans</h2>
      {plans.map((plan, index) => (
        <div key={index} className="receipt-item">
          {plan}
        </div>
      ))}
    </div>
  );
}

export default Receipt;
