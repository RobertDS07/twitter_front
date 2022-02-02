import { FC } from 'react'

import { Link } from 'react-router-dom'

import LoginLayout from '../../layouts/LoginLayout'

import RegistrationForm from './components/RegistrationForm'

import paths from '../../routes/paths'

import { Text } from './styles'

const Login: FC = () => {
    return (
        <LoginLayout>
            <RegistrationForm />

            <br />

            <Text>
                Already have an account?{` `}
                <Link to={paths.LOGIN}>Sign in</Link>
            </Text>
        </LoginLayout>
    )
}

export default Login
