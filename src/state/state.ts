import { Floor } from 'types'
import { v4 as uuidv4 } from 'uuid'
export interface InitialState {
  floors: Floor[]
  totalFloors: number
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
  totalFloors: 3
}

export default initialState
