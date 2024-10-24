import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Add custom styles in an external CSS file

const Home = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-title">
                    <h1>Stationary Store</h1>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li><Link to="/Admin">Admin</Link></li>
                        <li><Link to="/Sales">SalesPerson</Link></li>
                        <li><Link to="/Inventory">Inventory</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Home;
