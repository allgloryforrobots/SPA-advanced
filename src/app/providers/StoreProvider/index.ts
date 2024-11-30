import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore } from './config/store'
// тип будет импортироваться из вышестоящего слоя, но это исключение из правила
import type { StateSchema } from './config/StateSchema'

export {
    StoreProvider,
    createReduxStore,
    StateSchema
}