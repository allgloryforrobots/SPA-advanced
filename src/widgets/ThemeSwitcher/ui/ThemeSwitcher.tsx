import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
    const { theme, toggleTheme } = useTheme()
    const ICON_SIZE = 40

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? (
                <DarkIcon width={ICON_SIZE} height={ICON_SIZE} />
            ) : (
                <LightIcon width={ICON_SIZE} height={ICON_SIZE} />
            )}
        </Button>
    )
}
