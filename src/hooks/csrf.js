import { useEffect } from 'react'
import { setCsrfToken } from '@/lib/axios'

const CsrfSetup = () => {
    useEffect(() => {
        setCsrfToken()
    }, [])

    return null
}

export default CsrfSetup
