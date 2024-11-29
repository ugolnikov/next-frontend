import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://next-backend-production-686d.up.railway.app',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,  // Для работы с cookies
});

// Устанавливаем CSRF токен в заголовки
axiosInstance.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

export default axiosInstance;
