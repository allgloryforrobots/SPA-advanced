import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}