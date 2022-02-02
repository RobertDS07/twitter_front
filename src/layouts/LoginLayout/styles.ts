import styled from '@emotion/styled'

import { Grid } from '@mui/material'

import wave from '../../assets/svg/wave.svg'

export const GridWrapper = styled(Grid)`
    width: 100%;
    height: 100%;

    background-image: url(${wave});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Text = styled.p`
    font-size: 14px;
`
