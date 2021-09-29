import { createContext, useContext, useState, FC, useEffect } from 'react'

import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { useAlert } from './AlertContext'

import { doSignIn } from '../services/repository/authentication'
import { verifyToken } from '../services/repository/check'

import paths from '../routes/paths'

import getRequestErrorMessage from '../utils/getRequestErrorMessage'

import { User } from '../@types/interfaces/User'

interface AuthContext {
    user?: User
    isLogged: boolean
    handleSignOut: () => void
    handleSignIn: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

export const useAuthContext = () => useContext(AuthContext)

export const handleSignOut = () => {
    const history = useHistory()

    const [cookies, setCookies, removeCookie] = useCookies([`credentials`])

    removeCookie(`credentials`)

    history.push(paths.LOGIN)
}

export const AuthProvider: FC = ({ children }) => {
    const alert = useAlert()
    const history = useHistory()

    const [cookies, setCookies] = useCookies([`credentials`])

    const [user, setUser] = useState<User>(cookies.credentials?.user)

    const isLogged = !!user

    useEffect(() => {
        ;(async () => {
            if (!isLogged) return

            const token = cookies.credentials.token

            await verifyToken(token)
        })()
    }, [])

    const handleSignIn = async (
        email: string,
        password: string,
    ): Promise<void> => {
        try {
            const { data } = await doSignIn({ email, password })

            setCookies(`credentials`, data)

            setUser(data.user)

            history.push(paths.HOME)
        } catch (err) {
            const message = getRequestErrorMessage(err)

            alert.showAlert({ message, severity: `error` })
        }
    }

    return (
        <AuthContext.Provider
            value={{ handleSignIn, handleSignOut, user, isLogged }}
        >
            {children}
        </AuthContext.Provider>
    )
}
