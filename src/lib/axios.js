import Axios from 'axios';
import { useEffect } from 'react';

// Создаем экземпляр axios
const axiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://next-backend-production-686d.up.railway.app',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
});

const useAxiosSetup = () => {
    useEffect(() => {
        // Устанавливаем CSRF токен в заголовки, только на клиенте
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (csrfToken) {
            axiosInstance.defaults.headers['X-CSRF-TOKEN'] = csrfToken;
        }
    }, []);
};

export { axiosInstance, useAxiosSetup };
