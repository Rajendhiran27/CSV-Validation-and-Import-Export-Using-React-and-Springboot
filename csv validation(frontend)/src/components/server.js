import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8080/api/csv',
    headers: {
        // 'Content-type': 'multipart/form-data',
        'Content-Type': 'application/json',
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": process.env.REACT_APP_API_URL,
        // "Access-Control-Request-Headers": 'Content-Type, Authorization'
    }
    
});