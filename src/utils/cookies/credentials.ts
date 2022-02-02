import Cookies from 'js-cookie'

import { ResDoSignIn } from '../../services/api/modules/authentication/types'

const CREDENTIAL_COOKIE_KEY = `credentials`

const getCredentials = () => {
    const credentialsString = Cookies.get(CREDENTIAL_COOKIE_KEY)

    if (credentialsString) {
        try {
            const credentials: Partial<ResDoSignIn> =
                JSON.parse(credentialsString)

            return credentials
        } catch (e) {
            return null
        }
    }

    return null
}

const setCredentials = (data: ResDoSignIn) => {
    const dataInString = JSON.stringify(data)

    Cookies.set(CREDENTIAL_COOKIE_KEY, dataInString)
}

const removeCredentials = () => {
    Cookies.remove(CREDENTIAL_COOKIE_KEY)
}

export { getCredentials, setCredentials, removeCredentials }
