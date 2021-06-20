import { Actions, ActionType, Test } from './actions'
import initialState, { InitialState } from './state'

const appReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case ActionType.Test:
      return { ...state, test: 'Changed data' }

    default:
      return { ...state }
  }
}
export const test = (): Test => ({
  type: ActionType.Test
})

export default appReducer
