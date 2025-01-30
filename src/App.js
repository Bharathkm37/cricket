import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import UPIQRCode from './components/UPIQRCode';

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentForm setFormData={setFormData} />} />
        <Route path="/upi" element={<UPIQRCode formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
