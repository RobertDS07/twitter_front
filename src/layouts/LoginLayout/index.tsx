import { FC } from 'react'

import { Grid } from '@mui/material'

import BaseLayout from '../_BaseLayout'

import { GridWrapper } from './styles'

const LoginLayout: FC = ({ children }) => {
    return (
        <BaseLayout>
            <GridWrapper container>
                <Grid item height="100%" lg={6} />

                <Grid item height="100%" xs={12} lg={6}>
                    <Grid
                        container
                        height="100%"
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {children}
                    </Grid>
                </Grid>
            </GridWrapper>
        </BaseLayout>
    )
}

export default LoginLayout
