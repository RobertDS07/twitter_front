import { FC } from 'react'

import { Card, Grid, TextField } from '@mui/material'

import useFormRegistrationForm from './hooks/useRegistrationForm'

import Button from '../../../../components/_form/Button'

const FormLogin: FC = () => {
    const { onSubmit, errors, register, isLoading } = useFormRegistrationForm()

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
                            error={!!errors.email?.message}
                            helperText={errors.email?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register(`email`)}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="standard"
                            error={!!errors.username?.message}
                            helperText={errors.username?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register(`username`)}
                        />
                    </Grid>

                    <Grid item>
                        {/* TODO: COMPONETIZAR TextField */}
                        <TextField
                            hidden
                            fullWidth
                            type="password"
                            label="Password"
                            variant="standard"
                            error={!!errors.password?.message}
                            helperText={errors.password?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register(`password`)}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            hidden
                            fullWidth
                            type="password"
                            variant="standard"
                            label="Confirm Password"
                            error={!!errors.confirmPassword?.message}
                            helperText={errors.confirmPassword?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register(`confirmPassword`)}
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

export default FormLogin
