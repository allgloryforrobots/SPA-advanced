import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../model/ThemeContext'
import { FC, useMemo, useState, ReactNode } from 'react'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
    children?: ReactNode
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme
    } = props
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    )

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
