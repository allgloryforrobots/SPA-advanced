import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onChange: () => {}
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>


export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '12345'
    },
}

export const Dark: Story = {
    args: {
        placeholder: 'Type text',
        value: '12345'
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}