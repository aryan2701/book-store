import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Bookstore & Stationary Store Management</h1>
            <nav>
                <ul>
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                    <li><Link to="/sales">Sales</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
