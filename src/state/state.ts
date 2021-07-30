import { Floor } from 'types'

export interface InitialState {
  floors: Floor[]
  totalFloors: number
}

const initialState: InitialState = {
  floors: [
    {
      name: 'Floor 2',
      floorNumber: 2,
      isOpen: true,
      clickedpUp: false,
      clickedDown: false
    },
    {
      name: 'Floor 1',
      floorNumber: 1,
      isOpen: true,
      clickedpUp: false,
      clickedDown: false
    },
    {
      name: 'Ground',
      floorNumber: 0,
      isOpen: true,
      clickedpUp: false,
      clickedDown: false
    }
  ],
  totalFloors: 3
}

export default initialState
