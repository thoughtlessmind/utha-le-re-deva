import { useContext, FC } from 'react'
import Floors from 'components/Floors'
import styles from './mainContentWrapper.module.scss'
import { AppContext } from 'contexts'
import { useEffect } from 'react'

const MainContentWrapper: FC = () => {
  const {
    state: { liftHeight, floorHeight }
  } = useContext(AppContext)

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--floor-height',
      floorHeight + 'px'
    )
    document.documentElement.style.setProperty(
      '--lift-height',
      liftHeight + 'px'
    )
  }, [liftHeight, floorHeight])

  return (
    <div className={styles.container}>
      <Floors />
    </div>
  )
}

export default MainContentWrapper
