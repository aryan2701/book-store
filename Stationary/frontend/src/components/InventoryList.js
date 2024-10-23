import React, { useState, useEffect } from 'react';
import axios from '../utils/api';

const InventoryList = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        axios.get('/inventory')
            .then(response => setInventory(response.data))
            .catch(error => console.error('Error fetching inventory:', error));
    }, []);

    return (
        <div>
            <h2>Inventory</h2>
            <ul>
                {inventory.map(item => (
                    <li key={item._id}>
                        {item.title} - {item.quantity} available - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryList;
