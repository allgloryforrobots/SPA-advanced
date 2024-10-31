import { ErrorInfo, Component, ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError/ui/PageError'

interface IErrorBoundaryState {
    hasError: boolean
}

interface IErrorBoundaryProps {
    children: ReactNode
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('componentDidCatch', error, info.componentStack)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            )
        }
        return children
    }
}

export default ErrorBoundary
