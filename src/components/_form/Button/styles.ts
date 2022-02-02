import styled from '@emotion/styled'
import { Button } from '@mui/material'

export interface StyledMuiButtonProps {
    height?: number
}

export const StyledMuiButton = styled(Button)<StyledMuiButtonProps>`
    height: ${({ height }) => (height ? `${height}px` : null)};
`
