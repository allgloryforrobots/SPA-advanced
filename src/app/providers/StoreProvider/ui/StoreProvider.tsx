import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { DeepPartial } from 'app/types/globalTypes'
import { ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children ,
        initialState,
        asyncReducers
    } = props

    const store = createReduxStore(
        initialState as StateSchema,
        // вынужденная необходимость
        asyncReducers as ReducersMapObject<StateSchema>
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
