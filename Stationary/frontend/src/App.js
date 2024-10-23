import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Customers from './pages/Customers';
import InvoicePage from './pages/InvoicePage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/invoice/:id" element={<InvoicePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
