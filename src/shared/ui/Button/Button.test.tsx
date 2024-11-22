import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        screen.debug()
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })

    test('Test outline theme', () => {
        render(<Button theme={ButtonTheme.OUTLINE}>TEST</Button>)
        screen.debug()
        expect(screen.getByText('TEST')).toHaveClass('outline')
    })
})
