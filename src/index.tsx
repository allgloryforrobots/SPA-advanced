import { createRoot } from 'react-dom/client'
import App from './app/App'
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
