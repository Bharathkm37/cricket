import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const [formData, setFormData] = useState({ name: '', teamname:'', email: '', jerseyNumber: '', jerseySize: '', playerType: 'Batsman' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/upi');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Team Name</label>
          <input type="text" className="form-control" name="teamname" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Jersey Number</label>
          <input type="number" className="form-control" name="jerseyNumber" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Jersey Type</label>
          <select className="form-select" name="jerseySize" onChange={handleChange}>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Player Type</label>
          <select className="form-select" name="playerType" onChange={handleChange}>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="All Rounder">All Rounder</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Next</button>
      </form>
    </div>
  );
};

export default PaymentForm;
