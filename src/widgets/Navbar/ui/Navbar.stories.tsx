import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({

    })]
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const AuthNavbar: Story = {
    decorators: [StoreDecorator({
        user: { authData: {} }
    })],
}
