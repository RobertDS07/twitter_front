const useYupValidationResolver =
    (validationSchema: any) => async (data: any) => {
        try {
            const values = await validationSchema.validate(data, {
                abortEarly: false,
            })

            return {
                values,
                errors: {},
            }
        } catch (errors: any) {
            return {
                values: {},
                errors: errors.inner.reduce(
                    (allErrors: any, currentError: any) => ({
                        ...allErrors,
                        [currentError.path]: {
                            message: currentError.message,
                        },
                    }),
                    {},
                ),
            }
        }
    }

export default useYupValidationResolver
