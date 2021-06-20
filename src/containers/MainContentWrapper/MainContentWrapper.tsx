import { FC } from 'react'
import PropTypes from 'prop-types'

const MainContentWrapper: FC = (props) => {
  return (
    <div className="p-4 md:p-8 h-contentcontainer bg-red-200">
      {props.children}
    </div>
  )
}

MainContentWrapper.propTypes = {
  children: PropTypes.node
}

export default MainContentWrapper
