import { DeepPartial } from 'app/types/globalTypes'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
    test('should return error', () => {

        const ERROR_TEXT = 'error'

        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: ERROR_TEXT
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual(ERROR_TEXT)
    })

    test('should work with empty state', () => {

        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})