import { User } from '../../@types/User'

export type PropsDoSignIn = Pick<User, `email` | `password`>

export type PropsDoSignUp = Pick<User, `email` | `password` | `username`>

export interface ResDoSignIn {
    user: User
    token: string
}

export interface ResCheck {
    user: User
}
