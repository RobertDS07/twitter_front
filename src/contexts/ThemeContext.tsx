import { FC } from 'react'

import {
    CssBaseline,
    createTheme,
    ThemeProvider as MUIThemeProvider,
} from '@mui/material'

const theme = createTheme({})

export const ThemeProvider: FC = ({ children }) => {
    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />

            {children}
        </MUIThemeProvider>
    )
}
