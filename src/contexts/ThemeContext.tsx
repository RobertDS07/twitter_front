import { FC } from 'react'

import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'

import MuiTheme from '../styles/muiTheme'

const ThemeProvider: FC = ({ children }) => {
    return (
        <MUIThemeProvider theme={MuiTheme()}>
            <CssBaseline />

            {children}
        </MUIThemeProvider>
    )
}

export { ThemeProvider }
