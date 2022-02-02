import { FC } from 'react'

import { Link } from 'react-router-dom'

import LoginLayout from '../../layouts/LoginLayout'

import FormLogin from './components/LoginForm'

import { Text } from './styles'

import paths from '../../routes/paths'

const Login: FC = () => {
    return (
        <LoginLayout>
            {/* TODO: ADICIONAR OPÇÃO DE LOGAR COM GOOGLE E ETC... */}
            <FormLogin />

            <br />

            <Text>
                Don’t have an account?{` `}
                <Link to={paths.REGISTRATION}>Sign up</Link>
            </Text>
        </LoginLayout>
    )
}

export default Login
