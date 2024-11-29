import Axios from 'axios';
import { useEffect } from 'react';

const axiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://next-backend-production-686d.up.railway.app',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

// Эта функция будет вызываться только на клиенте
const setCsrfToken = () => {
    if (typeof window !== 'undefined') {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (csrfToken) {
            axiosInstance.defaults.headers['X-CSRF-TOKEN'] = csrfToken;
        }
    }
};

// Вызываем setCsrfToken только на клиенте
useEffect(() => {
    setCsrfToken();
}, []);

export default axiosInstance;
