import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
}
export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
}
export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
}

export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
