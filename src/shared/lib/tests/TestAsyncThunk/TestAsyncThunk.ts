import { StateSchema } from 'app/providers/StoreProvider'

// надо подумать, дописывать ли этот класс
export class TestAsyncThunk {
    // eslint-disable-next-line
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator

    // eslint-disable-next-line
    constructor(actionCreator: any) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    // eslint-disable-next-line
    async callThunk(arg: any) {
        const action = this.actionCreator(arg)
        return action(this.dispatch, this.getState, undefined)
    }
}