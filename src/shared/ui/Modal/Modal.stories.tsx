import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        isOpen: true
    },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
A consectetur eius eos excepturi incidunt obcaecati officiis quaerat quis repudiandae sapiente.`

export const Light: Story = {
    args: {
        children: text,
    },
}

export const Dark: Story = {
    args: {
        children: text,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}