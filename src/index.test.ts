import { store } from '18dux'

describe('store', () => {
  test('should be a redux store', () => {
    expect(store).toEqual(expect.objectContaining({
      subscribe: expect.any(Function),
      dispatch: expect.any(Function)
    }))
  })
})
