import { useForm } from 'react-hook-form'

import * as yup from 'yup'

import { useAuthContext } from '../../../../../contexts/AuthContext'

import useMockLoading from '../../../../../hooks/useMockLoading'
import useYupValidationResolver from '../../../../../hooks/useYupValidationResolver'

import { PropsDoSignUp } from '../../../../../services/api/modules/authentication/types'

interface RegistrationFormFields extends PropsDoSignUp {
    confirmPassword: string
}

const registrationFormSchema = yup.object({
    email: yup.string().required(`Required field`),
    username: yup.string().required(`Required field`),
    password: yup.string().required(`Required field`),
    confirmPassword: yup
        .string()
        .required(`Required field`)
        .equals([yup.ref(`password`)], `Not equal password`),
})

const useRegistrationForm = () => {
    const { handleSignUp } = useAuthContext()

    const resolver = useYupValidationResolver(registrationFormSchema)

    const [isLoading, handleSignUpWithMockLoading] =
        useMockLoading(handleSignUp)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistrationFormFields>({
        resolver,
    })

    return {
        errors,
        register,
        isLoading,
        onSubmit: handleSubmit(handleSignUpWithMockLoading),
    }
}

export default useRegistrationForm
