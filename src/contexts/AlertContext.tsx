import { FC, createContext, useState, useContext } from 'react'

import { Alert, AlertColor, Snackbar } from '@mui/material'

interface IAlertProps {
    timer: number
    visible: boolean

    message?: string
    severity?: AlertColor
}

type ShowAlertProps = Required<Pick<IAlertProps, `message` | `severity`>> &
    Partial<Pick<IAlertProps, `timer`>>

interface AlertContext {
    showAlert: (data: ShowAlertProps) => void
}

const DEFAULT_ALERT_PROPS = {
    timer: 5000,
    visible: false,
}

const AlertContext = createContext<AlertContext>({} as AlertContext)

const useAlert = () => useContext(AlertContext)

const AlertProvider: FC = ({ children }) => {
    const [alertProps, setAlertProps] =
        useState<IAlertProps>(DEFAULT_ALERT_PROPS)

    const hideAlert = () =>
        setAlertProps(oldVal => ({ ...oldVal, ...DEFAULT_ALERT_PROPS }))

    const showAlert = (data: ShowAlertProps) => {
        const newAlertProps = { ...alertProps, ...data, visible: true }

        setAlertProps(newAlertProps)
    }

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}

            <Snackbar
                onClose={hideAlert}
                open={alertProps.visible}
                autoHideDuration={alertProps.timer}
                anchorOrigin={{ horizontal: `center`, vertical: `bottom` }}
            >
                <Alert onClose={hideAlert} severity={alertProps.severity}>
                    {alertProps.message}
                </Alert>
            </Snackbar>
        </AlertContext.Provider>
    )
}

export { useAlert, AlertProvider }
