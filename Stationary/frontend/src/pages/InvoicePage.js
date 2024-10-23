import React from 'react';
import Invoice from '../components/Invoice';

const InvoicePage = ({ match }) => {
    return (
        <div>
            <h1>Invoice for Sale ID: {match.params.id}</h1>
            <Invoice saleId={match.params.id} />
        </div>
    );
};

export default InvoicePage;
