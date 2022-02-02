import { AxiosResponse } from 'axios'

import { PropsDoSignIn, PropsDoSignUp, ResCheck, ResDoSignIn } from './types'

import api from '../../index'

export const doSignIn = (data: PropsDoSignIn) =>
    api.post<ResDoSignIn>(`/authentication`, data)

export const doSignUp = (data: PropsDoSignUp) =>
    api.post<ResDoSignIn>(`/accounts`, data)

export const verifyToken = () =>
    api.get<null, AxiosResponse<ResCheck>>(`/check`)
