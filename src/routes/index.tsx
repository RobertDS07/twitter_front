import { FC, lazy } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import paths from './paths'

import RestrictedRoute from './components/RestrictedRoute'

const LazyHomeScreen = lazy(() => import(`../pages/Home`))
const LazyLoginScreen = lazy(() => import(`../pages/Login`))
const LazyNotFoundScreen = lazy(() => import(`../pages/NotFound`))
const LazyRegistrationScreen = lazy(() => import(`../pages/Registration`))

const Router: FC = () => {
    return (
        <Switch>
            <RestrictedRoute
                exact
                path={paths.HOME}
                authorizedTypeUser="logged"
                component={LazyHomeScreen}
            />

            <RestrictedRoute
                path={paths.LOGIN}
                authorizedTypeUser="unlogged"
                component={LazyLoginScreen}
            />
            <RestrictedRoute
                path={paths.REGISTRATION}
                authorizedTypeUser="unlogged"
                component={LazyRegistrationScreen}
            />

            <Route component={LazyNotFoundScreen} />
        </Switch>
    )
}

export default Router
