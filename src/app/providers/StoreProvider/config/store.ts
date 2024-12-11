import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { loginReducer } from '../../../../features/AuthByUsername'

// для тестов нужно будет создавать store с аргументами
export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

// store только для типизации
export const  typesStore = createReduxStore()

// Типы RootState и AppDispatch
export type RootState = ReturnType<typeof typesStore.getState>
export type AppDispatch = typeof typesStore.dispatch

