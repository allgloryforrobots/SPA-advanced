import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { FC } from 'react'
import { DeepPartial } from 'app/types/globalTypes'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: FC) => {
    return (
        <StoreProvider initialState={state}>
                <StoryComponent />
        </StoreProvider>
    )
}
