import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.MainLink}>
                    {t('Главная')}
                </AppLink>
            </div>
        </nav>
    )
}
