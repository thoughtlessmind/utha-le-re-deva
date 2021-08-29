import { Floor, LiftCallingQue, LiftStatus } from 'types'
import { v4 as uuidv4 } from 'uuid'
export interface InitialState {
  floors: Floor[]
  totalFloors: number
  liftCallingQue: LiftCallingQue[]
  totalLifts: number
  liftStatus: LiftStatus[]
  floorHeight: number
  liftHeight: number
}

const initialState: InitialState = {
  floors: [
    {
      isOpen: true,
      clickedpUp: false,
      clickedDown: false,
      id: uuidv4(),
      floorNumber: 2
    },
    {
      isOpen: true,
      clickedpUp: false,
      clickedDown: false,
      id: uuidv4(),
      floorNumber: 1
    },
    {
      isOpen: true,
      clickedpUp: false,
      clickedDown: false,
      id: uuidv4(),
      floorNumber: 0
    }
  ],
  totalFloors: 3,
  floorHeight: 150,
  liftHeight: 100,
  liftCallingQue: [],
  totalLifts: 0,
  liftStatus: [
    {
      id: uuidv4(),
      currentFloor: 0,
      isActive: true
    },
    {
      id: uuidv4(),
      currentFloor: 2,
      isActive: true
    }
  ]
}

export default initialState
