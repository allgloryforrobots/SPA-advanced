import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props) => {
    const { className } = props

    const { t, i18n } = useTranslation()

    const toggle = async () => {
        try {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Button
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
}
