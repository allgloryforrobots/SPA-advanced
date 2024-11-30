import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
// WTF: абсолютный путь выдаст ошибку на тестах!!!
import { counterReducer } from '../../../../entities/Counter'

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}