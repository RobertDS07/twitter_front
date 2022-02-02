import { FC } from 'react'

import { Card, Grid, TextField } from '@mui/material'

import useLoginForm from './hooks/useLoginForm'

import Button from '../../../../components/_form/Button'

const LoginForm: FC = () => {
    const { onSubmit, register, isLoading } = useLoginForm()

    return (
        <Card>
            <form onSubmit={onSubmit}>
                <Grid
                    container
                    spacing={3}
                    padding={3}
                    width="350px"
                    direction="column"
                >
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="standard"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register(`email`, { required: true })}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            hidden
                            fullWidth
                            type="password"
                            label="Password"
                            variant="standard"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register(`password`, { required: true })}
                        />
                    </Grid>

                    <Grid item>
                        <Button isLoading={isLoading} height={38}>
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    )
}

export default LoginForm
