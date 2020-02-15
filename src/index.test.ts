import { store } from '18dux'
import { start, end } from '18dux/actions'
import { State } from '18dux/types'

describe('store', () => {
  test('should be a redux store', () => {
    expect(store).toEqual(expect.objectContaining({
      subscribe: expect.any(Function),
      dispatch: expect.any(Function)
    }))
  })
})

describe('state middleware', () => {
  test('should block actions depending on current state', () => {
    expect(store.getState().state).toEqual(State.Setup)

    store.dispatch(end())
    expect(store.getState().state).toEqual(State.Setup)

    store.dispatch(start())
    expect(store.getState().state).toEqual(State.Running)

    store.dispatch(start())
    expect(store.getState().state).toEqual(State.Running)

    store.dispatch(end())
    expect(store.getState().state).toEqual(State.Ended)
  })
})
