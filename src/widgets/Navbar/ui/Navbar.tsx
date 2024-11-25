import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { ButtonTheme, Button } from 'shared/ui/Button/Button'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line max-len */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam commodi dolorum esse iusto magni minus nulla officia repellat? Architecto!')}
            </Modal>
        </nav>
    )
}
