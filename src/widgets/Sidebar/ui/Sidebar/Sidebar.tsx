import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { FC, memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'


interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(() => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const itemsList = useMemo(
() => {
            return SidebarItemsList.map((item) =>
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )
        },
    [collapsed]
    )


    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                {
                    itemsList
                }
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    )
})
