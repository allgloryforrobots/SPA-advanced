import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// компонент для тестирования
export const BugButton: FC = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const throwError = () => {
        setError(true)
    }
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return <button onClick={throwError}>{t('Выбросить ошибку')}</button>
}
