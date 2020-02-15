import { State } from '18dux/types'
import { start, end } from '18dux/actions'
import stateReducer from '18dux/reducers/state'

const unknown = { type: 'unknown' }

describe('StateReducer', () => {
  describe('Unknown action', () => {
    test('should initialize with the Setup state', () => {
      expect(stateReducer(undefined, unknown)).toEqual(State.Setup)
    })

    test('should do nothing with an unknown action', () => {
      expect(stateReducer(State.Running, unknown)).toEqual(State.Running)
    })
  })

  describe('start', () => {
    test('should change from Setup to Running', () => {
      expect(stateReducer(State.Setup, start())).toEqual(State.Running)
    })

    test('should change from Running to Running', () => {
      expect(stateReducer(State.Running, start())).toEqual(State.Running)
    })

    test('should change from Ended to Running', () => {
      expect(stateReducer(State.Ended, start())).toEqual(State.Running)
    })
  })

  describe('end', () => {
    test('should change from Setup to Ended', () => {
      expect(stateReducer(State.Setup, end())).toEqual(State.Ended)
    })

    test('should change from Running to Running', () => {
      expect(stateReducer(State.Running, end())).toEqual(State.Ended)
    })

    test('should change from Ended to Running', () => {
      expect(stateReducer(State.Ended, end())).toEqual(State.Ended)
    })
  })
})
