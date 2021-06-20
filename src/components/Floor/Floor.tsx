import { LiftButton, Button } from 'GlobalComponents'
import styles from './floor.module.scss'

type FloorProps = {
  floorName: string
  clickedUp: boolean
  clickedDown: boolean
}

const Floor = (props: FloorProps): JSX.Element => {
  const { floorName, clickedDown, clickedUp } = props
  return (
    <div className={styles.floorContainer}>
      <div className={styles.controleArea}>
        <p className={styles.floorName}>{floorName}</p>
        <div className="flex items-center gap-6 my-auto pt-4">
          <LiftButton btnType="up" pressed={clickedUp} />
          <LiftButton btnType="down" pressed={clickedDown} />
        </div>
      </div>
    </div>
  )
}

export default Floor
