import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })

    test('Test toggle', () => {
        componentRender(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug()
    })
})
