import { FC, lazy } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import paths from './paths'

import RestrictedRoute from './Components/RestrictedRoute'

const LazyHomeScreen = lazy(() => import(`../screens/Home`))
const LazyLoginScreen = lazy(() => import(`../screens/Login`))
const LazyRegisterScreen = lazy(() => import(`../screens/Register`))
const LazyNotFoundScreen = lazy(() => import(`../screens/NotFound`))

const Router: FC = () => {
    return (
        <BrowserRouter>
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
                    path={paths.REGISTER}
                    authorizedTypeUser="unlogged"
                    component={LazyRegisterScreen}
                />

                <Route component={LazyNotFoundScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
