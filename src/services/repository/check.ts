import api from '../api'

export const verifyToken = (token: string) =>
    api.get(`/check`, {
        params: {
            token,
        },
    })
