import React from 'react';
import { db } from '../firebase/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const UPIQRCode = () => {
  const theformData = localStorage.getItem('payments');
  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = displayRazorpay;
    document.body.appendChild(script);
  };

  const displayRazorpay = async () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', 
      amount: 30000,
      currency: 'INR',
      name: 'Cricket Registration',
      description: 'Registration Fee',
      handler: async function (response) {
        try {
          await addDoc(collection(db, 'registrations'), theformData);
          alert('Payment Successful!');
        } catch (error) {
          console.error('Error writing document: ', error);
        }
      },
      prefill: {
        name: theformData.name,
        email: theformData.email,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <button onClick={loadRazorpay} className="btn btn-success">Pay ₹300</button>
    </div>
  );
};

export default UPIQRCode;
