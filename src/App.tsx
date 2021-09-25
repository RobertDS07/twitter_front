import { FC, Suspense } from 'react'

import Router from './routes'

//TODO: ADD ErrorBoundary AND Suspense AND CUSTOM PATHS TO IMPORT
const App: FC = () => {
    return (
        <Suspense fallback={<h1>Carregando...</h1>}>
            <Router />
        </Suspense>
    )
}

export default App
