import { useState } from 'react'

const useMockLoading = <T>(
    asyncFunction: (data: any) => Promise<T>,
): [boolean, (data: any) => Promise<T>] => {
    const [isLoading, setIsLoading] = useState(false)

    const handleAsyncFunction = async (data: any) => {
        setIsLoading(true)

        try {
            return await asyncFunction(data)
        } finally {
            setIsLoading(false)
        }
    }

    return [isLoading, handleAsyncFunction]
}

export default useMockLoading
