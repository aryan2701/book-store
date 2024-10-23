import React, { useState, useEffect } from 'react';
import axios from '../utils/api';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer._id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
