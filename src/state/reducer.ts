import { Floor } from 'types'
import {
  Actions,
  ActionType,
  AddFloor,
  Log,
  RemoveFloor,
  Test
} from './actions'
import initialState, { InitialState } from './state'
import { v4 as uuidv4 } from 'uuid'

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

    case ActionType.RemoveFloor:
      return {
        ...state,
        totalFloors: state.totalFloors - 1,
        floors: removeOneFloor(action.payload, state.floors)
      }

    default:
      return { ...state }
  }
}

const getNewFloor = (floorNumber: number): Floor => ({
  clickedDown: false,
  clickedpUp: false,
  isOpen: false,
  id: uuidv4(),
  floorNumber
})

const removeOneFloor = (floorId: string, floorsData: Floor[]): Floor[] => {
  const removingIndex = floorsData.findIndex((i) => i.id === floorId)
  const stableArr = floorsData.slice(removingIndex + 1)
  const adjustingArr = floorsData
    .slice(0, removingIndex)
    .map((floor) => ({ ...floor, floorNumber: floor.floorNumber - 1 }))
  return [...adjustingArr, ...stableArr]
}

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

export const removeFloor = (floorId: string): RemoveFloor => ({
  type: ActionType.RemoveFloor,
  payload: floorId
})

export default appReducer
