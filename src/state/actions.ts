export enum ActionType {
  Test = 'TEST',
  Log = 'LOG',
  AddFloor = 'ADD_FLOOR'
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

export type Actions = Test | Log | AddFloor
