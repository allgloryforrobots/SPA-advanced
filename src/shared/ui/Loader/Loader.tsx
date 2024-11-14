import './Loader.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = (props: LoaderProps) => {
    const { className } = props
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
