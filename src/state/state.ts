import { Floor } from 'types'

export interface InitialState {
  test: string
  floors: Floor[]
}

const initialState: InitialState = {
  test: 'Test Data unchanged',
  floors: [
    { name: 'Floor 1', isOpen: true, clickedpUp: false, clickedDown: true },
    { name: 'Ground', isOpen: true, clickedpUp: false, clickedDown: false }
  ]
}

export default initialState
