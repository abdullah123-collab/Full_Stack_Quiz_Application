import axios from 'axios';

const api = axios.create({
    // process.env KO POORA HATA DIA HAI. Sirf direct link bacha hai:
    baseURL: 'https://qm-pro-backend-pk.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor to add token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        } else if (!error.response) {
            // Network error - backend down or CORS issue
            console.error('Backend connection error. Make sure the backend is live at https://full-stack-quiz-application-vkq1.onrender.com');
            alert('Failed to connect to the server. Please check your internet connection or try again later.');
        }
        return Promise.reject(error);
    }
);

export default api;