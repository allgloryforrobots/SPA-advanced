import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'

const MainPage = () => {
    const { t } = useTranslation('main')

    return <div>
        <Button>
            {t('Главная страница')}
        </Button>
        <AppLink to={'/'}>
            {t('Главная страница')}
        </AppLink>

        {t('Главная страница')}
    </div>
}

export default MainPage
