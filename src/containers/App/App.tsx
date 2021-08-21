import { FC } from 'react'
import Header from 'components/Header'
import MainContentWrapper from 'containers/MainContentWrapper'
import { AppContextProvider } from 'contexts'

const App: FC = () => {
  return (
    <AppContextProvider>
      <Header />
      <MainContentWrapper />
    </AppContextProvider>
  )
}

export default App
