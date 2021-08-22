export enum ActionType {
  Test = 'TEST',
  Log = 'LOG',
  AddFloor = 'ADD_FLOOR',
  RemoveFloor = 'REMOVE_FLOOR'
}

export interface Test {
  type: ActionType.Test
}

export interface Log {
  type: ActionType.Log
  payload: number
}

export interface AddFloor {
  type: ActionType.AddFloor
}

export interface RemoveFloor {
  type: ActionType.RemoveFloor
  payload: string
}

export type Actions = Test | Log | AddFloor | RemoveFloor
