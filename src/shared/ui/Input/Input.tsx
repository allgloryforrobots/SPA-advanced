import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
    FC,
    InputHTMLAttributes,
    memo,
    ChangeEvent,
    useState,
    SyntheticEvent,
    useEffect, useRef,
} from 'react'

// конфликт типов с value и onChange в input, исключаем
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange: (value: string) => void
    autofocus?: boolean
}

export const Input: FC<InputProps> = memo((props) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [caretPosition, setCaretPosition] = useState(0)
    const [isFocused, setIsFocused] = useState(false)
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e?.target as HTMLInputElement
        setCaretPosition(target?.selectionStart || 0)
    }
    
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}

            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />

                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{left: `${caretPosition * 9}px`}}
                    />
                )}
            </div>

        </div>
    )
})

Input.displayName = "Input"
