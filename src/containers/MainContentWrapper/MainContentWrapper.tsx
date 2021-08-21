import { FC } from 'react'
import Floors from 'components/Floors'
import styles from './mainContentWrapper.module.scss'

const MainContentWrapper: FC = () => {
  return (
    <div className={styles.container}>
      <Floors />
    </div>
  )
}

export default MainContentWrapper
