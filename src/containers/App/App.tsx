import { FC } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import MainContentWrapper from 'containers/MainContentWrapper'
import { AppContextProvider } from 'contexts'

const App: FC = (props) => {
  return (
    <AppContextProvider>
      <div>
        <Header />
        <div className="pt-header">
          <MainContentWrapper>props.children</MainContentWrapper>
        </div>
      </div>
    </AppContextProvider>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
