import { FC } from 'react'

import { CircularProgress } from '@mui/material'

import { StyledMuiButton, StyledMuiButtonProps } from './styles'

interface ButtonProps extends StyledMuiButtonProps {
    isLoading?: boolean
    isDisabled?: boolean
}

const Button: FC<ButtonProps> = ({
    children,
    isLoading,
    isDisabled,
    ...stylesProps
}) => {
    const disabled = isLoading || isDisabled

    return (
        <StyledMuiButton
            fullWidth
            type="submit"
            variant="contained"
            disabled={disabled}
            {...stylesProps}
        >
            {isLoading ? (
                <CircularProgress
                    size={stylesProps.height ? stylesProps.height / 2 : 15}
                />
            ) : (
                children
            )}
        </StyledMuiButton>
    )
}

export default Button
