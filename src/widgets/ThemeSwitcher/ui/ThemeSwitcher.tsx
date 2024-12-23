import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { FC, memo } from 'react'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(() => {
    const { theme, toggleTheme } = useTheme()
    const ICON_SIZE = 40

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? (
                <DarkIcon width={ICON_SIZE} height={ICON_SIZE} />
            ) : (
                <LightIcon width={ICON_SIZE} height={ICON_SIZE} />
            )}
        </Button>
    )
})
