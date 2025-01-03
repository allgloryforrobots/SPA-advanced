import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { FC } from 'react'
import { DeepPartial } from 'app/types/globalTypes'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    // eslint-disable-next-line react/display-name
) => (StoryComponent: FC) => {
    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
        >
                <StoryComponent />
        </StoreProvider>
    )
}
