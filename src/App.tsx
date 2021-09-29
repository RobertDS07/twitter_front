import { FC, Suspense } from 'react'

import { AuthProvider } from './contexts/AuthContext'
import { AlertProvider } from './contexts/AlertContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { CookiesProvider } from 'react-cookie'

import Router from './routes'

//TODO: ADD ErrorBoundary AND CUSTOM PATHS TO IMPORT
const App: FC = () => {
    return (
        <CookiesProvider>
            <ThemeProvider>
                <AlertProvider>
                    <AuthProvider>
                        <Suspense fallback={<h1>Carregando...</h1>}>
                            <Router />
                        </Suspense>
                    </AuthProvider>
                </AlertProvider>
            </ThemeProvider>
        </CookiesProvider>
    )
}

export default App
