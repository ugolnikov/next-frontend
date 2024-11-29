import Axios from 'axios'

// Создайте экземпляр axios
const axiosInstance = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://next-backend-production-686d.up.railway.app',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

// Этот код будет только для настройки axios и не использует useEffect
const setCsrfToken = () => {
    if (typeof window !== 'undefined') {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
        if (csrfToken) {
            axiosInstance.defaults.headers['X-CSRF-TOKEN'] = csrfToken
        }
    }
}

// Экспортируйте axios с настройками

export { setCsrfToken }
export default { axiosInstance }
