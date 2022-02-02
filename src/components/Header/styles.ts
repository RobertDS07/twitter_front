import { AppBar, styled } from '@mui/material'

import { VERTICAL_PADDING } from '../../styles/constants'

export const Wrapper = styled(AppBar)`
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 ${VERTICAL_PADDING};
`
