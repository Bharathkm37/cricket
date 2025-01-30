import React from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseApp } from '../firebase/firebaseConfig';

function SavePayment({ formData }) {
  const saveToDatabase = async () => {
    const db = getFirestore(firebaseApp);
    try {
      await addDoc(collection(db, 'payments'), formData);
      alert('Payment successful and data saved!');
    } catch (error) {
      alert('Error saving data: ' + error.message);
    }
  };

  return <button onClick={saveToDatabase}>Save Payment Data</button>;
}

export default SavePayment;
