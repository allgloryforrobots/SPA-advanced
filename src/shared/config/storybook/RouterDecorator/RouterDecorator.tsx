import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: FC) => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    )
}
