import { createTheme } from '@mui/material'

const globalStyles = {
    overflowX: `hidden`,
    textDecoration: `none`,
    boxSizing: `border-box`,
    scrollBehavior: `smooth`,
}

//TODO: VERIFICAR POR QUÊ O MuiCssBaseline ESTA DEPRACTED E LIDAR COM ISSO
const muiTheme = (dark = false) =>
    createTheme({
        components: {
            MuiCssBaseline: { styleOverrides: { '*': globalStyles } },
        },
        palette: {
            primary: {
                main: `#075cb2`,
            },
            background: {
                default: `#FEFAFA`,
            },
        },
    })

export default muiTheme
