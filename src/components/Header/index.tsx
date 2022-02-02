import { FC } from 'react'

import { Link } from 'react-router-dom'

import { Slide, useScrollTrigger } from '@mui/material'

import { useAuthContext } from '../../contexts/AuthContext'

import paths from '../../routes/paths'

import { Wrapper } from './styles'

const Header: FC = () => {
    const trigger = useScrollTrigger()

    const { isLogged } = useAuthContext()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <Wrapper color="primary">
                <Link to={isLogged ? paths.HOME : paths.LOGIN}>LOGO</Link>
            </Wrapper>
        </Slide>
    )
}

export default Header
