import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
}
export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR
    },
}

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
}

export const onlyText: Story = {
    args: {
        text: 'Text',
    },
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const onlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const onlyTextDark: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

