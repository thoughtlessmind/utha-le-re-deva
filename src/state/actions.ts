export enum ActionType {
  Test
}

export interface Test {
  type: ActionType.Test
}

export type Actions = Test
