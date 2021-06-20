import { FC } from 'react'
import Header from 'components/Header'
import MainContentWrapper from 'containers/MainContentWrapper'
import { AppContextProvider } from 'contexts'

const App: FC = () => {
  return (
    <AppContextProvider>
      <div>
        <Header />
        <div className="pt-header">
          <MainContentWrapper />
        </div>
      </div>
    </AppContextProvider>
  )
}

export default App
