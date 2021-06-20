import { Children, createContext, Dispatch, FC, useReducer } from 'react'
import { Actions } from '../state/actions'
import appReducer from '../state/reducer'
import initialState, { InitialState } from '../state'

export const AppContext = createContext<{
  state: InitialState
  dispatch: Dispatch<Actions>
}>({
  state: initialState,
  dispatch: () => undefined
})

export const AppContextProvider: FC = (props) => {
  const { children } = props

  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: Children
}
