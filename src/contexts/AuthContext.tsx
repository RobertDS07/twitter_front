import { createContext, useContext, useState, FC, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import { useAlert } from './AlertContext'

import {
    doSignIn,
    doSignUp,
    verifyToken,
} from '../services/api/modules/authentication/repository'
import {
    PropsDoSignIn,
    PropsDoSignUp,
} from '../services/api/modules/authentication/types'

import paths from '../routes/paths'

import getRequestErrorMessage from '../utils/getRequestErrorMessage'
import { getCredentials, setCredentials } from '../utils/cookies/credentials'

import { User } from '../services/api/@types/User'

interface AuthContext {
    user: User | null
    isLogged: boolean
    handleSignOut: () => void
    handleSignUp: (userData: PropsDoSignUp) => Promise<void>
    handleSignIn: (userData: PropsDoSignIn) => Promise<void>
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

const useAuthContext = () => useContext(AuthContext)

const handleSignOut = () => {
    Cookies.remove(`credentials`)

    // TODO: VERIFICAR MODO MELHOR DE FAZER O LOGOUT
    // ATT: POSSÍVEL SOLUÇÃO (BroadcastChannel)
    window.location.pathname = paths.LOGIN
}

const AuthProvider: FC = ({ children }) => {
    const alert = useAlert()
    const history = useHistory()

    const [user, setUser] = useState<User | null>(null)

    const isLogged = !!user

    useEffect(() => {
        ;(async () => {
            const credentials = getCredentials()

            if (!credentials || !credentials.token) return

            const res = await verifyToken()

            const { user } = res.data

            setUser(user)
        })()
    }, [])

    const handleSignIn = async (userData: PropsDoSignIn) => {
        try {
            const { data } = await doSignIn(userData)

            setCredentials(data)

            setUser(data.user)

            history.push(paths.HOME)
        } catch (err) {
            const message = getRequestErrorMessage(err)

            alert.showAlert({ message, severity: `error` })
        }
    }

    const handleSignUp = async (userData: PropsDoSignUp) => {
        try {
            const { data } = await doSignUp(userData)

            setCredentials(data)

            setUser(data.user)

            history.push(paths.HOME)
        } catch (err) {
            const message = getRequestErrorMessage(err)

            alert.showAlert({ message, severity: `error` })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isLogged,
                handleSignIn,
                handleSignUp,
                handleSignOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, handleSignOut, useAuthContext }
