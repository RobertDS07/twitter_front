import axios from 'axios'

import { useCookies } from 'react-cookie'

import { handleSignOut } from '../contexts/AuthContext'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(req => {
    const [cookies] = useCookies([`credentials`])

    const token = cookies.credentials.token

    if (token) req.headers.authorization = `Bearer ${token}`

    return req
})

api.interceptors.response.use(
    res => res,
    err => {
        const code = err.response.status

        const isAuthorizationError = code === 401
        //TODO: ADICIONAR refreshToken
        if (isAuthorizationError) handleSignOut()

        return err
    },
)

export default api
