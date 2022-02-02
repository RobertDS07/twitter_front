import { FC, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import { AlertProvider } from './contexts/AlertContext'
import { ThemeProvider } from './contexts/ThemeContext'

import Router from './routes'

//TODO: ADD ErrorBoundary AND CUSTOM PATHS TO IMPORT
const App: FC = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <AlertProvider>
                    <AuthProvider>
                        <Suspense fallback={<h1>Carregando...</h1>}>
                            <Router />
                        </Suspense>
                    </AuthProvider>
                </AlertProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
