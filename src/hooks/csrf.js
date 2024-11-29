import { useEffect } from 'react';
import { setCsrfToken } from '@/lib/axios';

const CsrfSetup = () => {
    useEffect(() => {
        setCsrfToken(); // Устанавливаем CSRF токен только на клиенте
    }, []);

    return null; // Компонент ничего не рендерит
};

export default CsrfSetup;
