import axios from 'axios'

import { handleSignOut } from '../../contexts/AuthContext'

import { getCredentials } from '../../utils/cookies/credentials'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(req => {
    // TODO: FAZER UMA TRATATIVA DE VALIDAÇÃO DO TOKEN PARA VER SE ELE É VÁLIDO ATES DE ENVIAR E CASO ELE NÃO SEJA CHAMAR O REFRESH TOKEN, TUDO ISSO ANTES DA REQUISIÇÃO E CASO O REFRESH TOKEN NÃO SEJA ACEITO NA REQUISIÇÃO, LIMPAR OS DADOS DO USER E DAR LOGOUT NELE
    const credentials = getCredentials()

    if (credentials) {
        //TODO: ESTUDAR OS TIPOS DE TOKEN E VERIFICAR PQ O Bearer É TÃO UTILIZADO
        //TODO?: ADICIONAR UM CAMPO DENTRO DE 'token' PARA ESPECIFICAR O TYPE DELE
        if (credentials.token)
            req.headers.authorization = `Bearer ${credentials.token}`
    }

    return req
})

api.interceptors.response.use(
    res => res,
    err => {
        const code = err.response.status

        const isAuthorizationError = code === 401

        if (isAuthorizationError) {
            const credentials = getCredentials()

            const needsRemoveToken = !!credentials

            needsRemoveToken && handleSignOut()
        }

        return Promise.reject(err)
    },
)

export default api
