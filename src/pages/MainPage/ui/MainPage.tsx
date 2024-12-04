import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { useState } from 'react'

const MainPage = () => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')
    const onChange = (val: string) => {
        setValue(val)
    }

    return <div>
        <Input
            onChange={onChange}
            value={value}
            placeholder='Введите текст'
        />
        {t('Главная страница')}
    </div>
}

export default MainPage
