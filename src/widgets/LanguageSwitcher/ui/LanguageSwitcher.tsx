import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { FC } from 'react'

interface LanguageSwitcherProps {
    className?: string
    short?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const { className, short } = props

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
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}
