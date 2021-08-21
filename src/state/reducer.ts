import { Floor } from 'types'
import { Actions, ActionType, AddFloor, Log, Test } from './actions'
import initialState, { InitialState } from './state'

const appReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case ActionType.Test:
      return { ...state }

    case ActionType.Log:
      console.log({ action })
      return { ...state, totalFloors: state.totalFloors + action.payload }

    case ActionType.AddFloor:
      return {
        ...state,
        floors: [getNewFloor(state.totalFloors), ...state.floors],
        totalFloors: state.totalFloors + 1
      }

    default:
      return { ...state }
  }
}

const getNewFloor = (floorNumber: number): Floor => ({
  floorNumber,
  name: `Floor ${floorNumber}`,
  clickedDown: false,
  clickedpUp: false,
  isOpen: false
})

export const test = (): Test => ({
  type: ActionType.Test
})

export const log = (num: number): Log => ({
  type: ActionType.Log,
  payload: num
})

export const addNewFloor = (): AddFloor => ({
  type: ActionType.AddFloor
})

export default appReducer
