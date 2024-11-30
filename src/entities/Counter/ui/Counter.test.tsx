import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
        screen.debug()
    })

    test('Test increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        const incrementBtn = screen.getByTestId('increment-btn')
        expect(incrementBtn).toBeInTheDocument()
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
        screen.debug()
    })

    test('Test decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        const decrementBtn = screen.getByTestId('decrement-btn')
        expect(decrementBtn).toBeInTheDocument()
        fireEvent.click(decrementBtn)
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
        screen.debug()
    })
})
