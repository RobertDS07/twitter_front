import { AxiosResponse } from 'axios'

import api from '../api'

import { User } from '../../@types/interfaces/User'

interface propsDoSignIn {
    email: string
    password: string
}

interface resDoSignIn {
    token: string
    user: User
}

export const doSignIn = (
    data: propsDoSignIn,
): Promise<AxiosResponse<resDoSignIn>> => api.post(`/authentication`, data)
