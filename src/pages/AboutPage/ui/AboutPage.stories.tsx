import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AboutPage from './AboutPage'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}
