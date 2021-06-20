import { FC } from 'react'
import Floors from 'components/Floors'

const MainContentWrapper: FC = () => {
  return (
    <div className="p-4 md:p-8 h-contentcontainer bg-gray-300">
      <Floors />
    </div>
  )
}

export default MainContentWrapper
