import React, { useState, useEffect } from 'react';
import axios from '../utils/api';

const Invoice = ({ saleId }) => {
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        axios.get(`/sales/invoice/${saleId}`)
            .then(response => setInvoice(response.data.invoice))
            .catch(error => console.error('Error fetching invoice:', error));
    }, [saleId]);

    return (
        <div>
            {invoice ? (
                <pre>{invoice}</pre>
            ) : (
                <p>Loading invoice...</p>
            )}
        </div>
    );
};

export default Invoice;
