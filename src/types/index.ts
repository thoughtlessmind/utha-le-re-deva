export interface Floor {
  isOpen: boolean
  clickedpUp: boolean
  clickedDown: boolean
  id: string
  floorNumber: number
}

export type LiftCallingQue = {
  direction: 0 | 1
  floor: number
}

export type LiftStatus = {
  id: string
  currentFloor: number
  isActive: boolean
}
