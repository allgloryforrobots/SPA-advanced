import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/LoginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { AppDispatch } from 'app/providers/StoreProvider/config/store'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className } = props
    const {t} = useTranslation()
    const dispatch = useDispatch<AppDispatch>()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />

            {error &&
                <Text
                    text={t('Неверный логин или пароль')}
                    theme={TextTheme.ERROR}
                />
            }

            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                autofocus
                value={username}
            />

            <Input
                type="password"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />

            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})

LoginForm.displayName = "LoginForm"
