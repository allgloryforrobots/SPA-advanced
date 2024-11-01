import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('classNames', () => {
    // test('with only first param', () => {
    //     render(<Button>TEST</Button>)
    //     expect(screen.getByText('TEST')).toBeInTheDocument()
    // })

    test('has clear class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        screen.debug()
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
