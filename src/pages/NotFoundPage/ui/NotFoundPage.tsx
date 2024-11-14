import { classNames } from 'shared/lib/classNames//classNames'
import cls from './NotFoundPage.module.scss'
import React, { FC } from 'React'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props: NotFoundPageProps) => {
    const { className } = props
    const { t } = useTranslation('not-found')
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
}
