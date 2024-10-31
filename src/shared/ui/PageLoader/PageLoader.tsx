import { classNames } from 'shared/lib/classNames//classNames'
import * as cls from './PageLoader.module.scss'
import { FC } from 'React'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
