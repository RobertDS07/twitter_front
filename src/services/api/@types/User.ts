import { Timestamps } from './Timestamps'

export interface User extends Timestamps {
    id: number
    email: string
    username: string
    password: string
}
