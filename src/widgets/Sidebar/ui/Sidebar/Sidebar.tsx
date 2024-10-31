import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}>
            <button onClick={onToggle}>Toggle</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
