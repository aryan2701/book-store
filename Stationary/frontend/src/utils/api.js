import axios from 'axios';

// Create an Axios instance with base URL for the backend API
const api = axios.create({
    baseURL: 'http://localhost:5000', // Set your backend server's base URL here
    timeout: 10000, // Optional: set a timeout for requests (10 seconds)
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;
