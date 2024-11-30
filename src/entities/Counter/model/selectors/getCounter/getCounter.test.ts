import { getCounter } from './getCounter'
import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'app/types/globalTypes'

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })
})
