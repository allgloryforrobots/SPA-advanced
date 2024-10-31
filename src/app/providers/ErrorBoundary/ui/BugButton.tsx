import { FC, useEffect, useState } from 'react'

// компонент для тестирования
export const BugButton: FC = () => {
    const [error, setError] = useState(false)
    const throwError = () => {
        setError(true)
    }
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return <button onClick={throwError}>Throw Error</button>
}
