import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'React'
import { ReactNode } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className, children, theme = '', ...otherProps } = props
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
            type="button"
        >
            {children}
        </button>
    )
}
