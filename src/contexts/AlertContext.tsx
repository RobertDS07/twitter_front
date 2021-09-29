import { FC, createContext, useState, useContext } from 'react'

import { Alert, AlertColor } from '@mui/material'

interface showAlertProps {
    message: string
    severity: AlertColor

    timer?: number
}

interface AlertContext {
    showAlert: (data: showAlertProps) => void
}

const DEFAULT_ALERT_PROPS = {
    timer: 4000,
    message: ``,
    severity: ``,
    visible: false,
}

const AlertContext = createContext<AlertContext>({} as AlertContext)

export const useAlert = () => useContext(AlertContext)

export const AlertProvider: FC = ({ children }) => {
    const [alertProps, setAlertProps] = useState(DEFAULT_ALERT_PROPS)

    const hideAlert = () => setAlertProps(DEFAULT_ALERT_PROPS)

    const showAlert = (data: showAlertProps) => {
        const newAlertProps = { ...alertProps, ...data, visible: true }

        setAlertProps(newAlertProps)

        setTimeout(hideAlert, newAlertProps.timer)
    }

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}

            {alertProps.visible && (
                <Alert
                    severity={alertProps.severity as AlertColor}
                    onClose={hideAlert}
                >
                    {alertProps.message}
                </Alert>
            )}
        </AlertContext.Provider>
    )
}
