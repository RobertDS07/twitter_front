import { FC, useContext } from 'react'

import { Redirect, Route } from 'react-router'

import paths from '../paths'

interface RestrictedRouteProps {
    path: string
    exact?: boolean
    component: FC<any>
    authorizedTypeUser: `logged` | `unlogged`
}

const RestrictedRoute: FC<RestrictedRouteProps> = ({
    path,
    exact,
    authorizedTypeUser,
    component: Component,
}) => {
    const { isLogged } = { isLogged: false }

    const onlyLoggedUsers = authorizedTypeUser === `logged`

    return (
        <Route
            exact={exact}
            path={path}
            render={props => {
                if (onlyLoggedUsers)
                    return isLogged ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={paths.LOGIN} />
                    )

                return isLogged ? (
                    <Redirect to={paths.HOME} />
                ) : (
                    <Component {...props} />
                )
            }}
        />
    )
}

export default RestrictedRoute
