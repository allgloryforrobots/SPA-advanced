import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'


export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    // @ts-expect-error придется так сделать, в старых версиях было более осмысленно
    reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}


