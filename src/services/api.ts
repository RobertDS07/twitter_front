import axios from 'axios'

const api = axios.create({
    url: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(req => {
    const token = localStorage.getItem(`accessToken`)

    if (token) req.headers.authorization = `Bearer ${token}`

    return req
})

api.interceptors.response.use(
    res => res,
    err => {
        const code = err.response.status

        const isAuthorizationError = code === 401
        //TODO: ADICIONAR refreshToken
        if (isAuthorizationError) localStorage.removeItem(`accessToken`)

        return err
    },
)

export default api
