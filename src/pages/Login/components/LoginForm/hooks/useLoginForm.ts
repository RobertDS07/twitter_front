import { useForm } from 'react-hook-form'

//TODO: UTILIZAR 'path alias'
//TODO²: AO UTILIZAR 'path alias' UTILIZAR EXTENSÃO DO ESLINT PARA ORGANIZAR OS IMPORTS
import { useAuthContext } from '../../../../../contexts/AuthContext'

import useMockLoading from '../../../../../hooks/useMockLoading'

import { PropsDoSignIn } from '../../../../../services/api/modules/authentication/types'

const useLoginForm = () => {
    const { handleSignIn } = useAuthContext()

    const [isLoading, handleSignInWithMockLoading] =
        useMockLoading(handleSignIn)

    const { register, handleSubmit } = useForm<PropsDoSignIn>({})

    return {
        register,
        isLoading,
        onSubmit: handleSubmit(handleSignInWithMockLoading),
    }
}

export default useLoginForm
