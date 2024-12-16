import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
// пока пути относительные, как сделать абсолютные для CI|CD разобраться потом
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { createReducerManager } from './reducerManager'

// для тестов нужно будет создавать store с аргументами
export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-expect-error: TODO types
    store.reducerManager = reducerManager

    return store
}

// store только для типизации
export const  typesStore = createReduxStore()

// Типы RootState и AppDispatch
export type RootState = ReturnType<typeof typesStore.getState>
export type AppDispatch = typeof typesStore.dispatch

