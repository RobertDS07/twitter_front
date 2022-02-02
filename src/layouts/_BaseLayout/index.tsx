import { FC } from 'react'

import Header from '../../components/Header'

import { Wrapper } from './styles'

const BaseLayout: FC = ({ children }) => {
    return (
        <Wrapper>
            <Header />

            {children}
        </Wrapper>
    )
}

export default BaseLayout
