import React, { useState } from 'react';
import axios from '../utils/api';

const SalesForm = () => {
    const [customer, setCustomer] = useState('');
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleSale = async () => {
        const saleData = { customer, items, totalAmount };
        try {
            const response = await axios.post('/sales', saleData);
            alert(`Sale processed! Invoice ID: ${response.data.invoice._id}`);
        } catch (error) {
            console.error('Error processing sale:', error);
        }
    };

    return (
        <div>
            <h2>Process a Sale</h2>
            {/* Form for sale goes here */}
            <button onClick={handleSale}>Process Sale</button>
        </div>
    );
};

export default SalesForm;
