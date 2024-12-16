import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './LoginForm'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd'
        }
    })],
}

export const withError: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: '123',
            password: 'asd',
            error: 'Неверный логин или пароль'
        }
    })],
}

export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            isLoading: true
        }
    })],
}