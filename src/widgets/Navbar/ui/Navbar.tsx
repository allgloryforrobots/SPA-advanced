import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonTheme, Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
        setIsAuthModal(false)
    }, [dispatch])


    if (authData) {
        return (
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </nav>
        )
    }

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </nav>
    )
}
