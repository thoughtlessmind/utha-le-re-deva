import { AppContext } from 'contexts'
import { useContext } from 'react'
import { FC } from 'react'
import { LiftStatus } from 'types'
import styles from './lift.module.scss'

type LiftProps = {
  liftIndex: number
  liftStatus: LiftStatus
}

const Lift: FC<LiftProps> = (props) => {
  const { liftIndex, liftStatus } = props

  const {
    state: { liftHeight, floorHeight }
  } = useContext(AppContext)

  return (
    <div
      style={{
        transform: `translateY(-${floorHeight * liftStatus.currentFloor}px)`
      }}
      className={styles.liftContainer}
    >
      <p>Lift-{liftIndex}</p>
    </div>
  )
}

export default Lift
