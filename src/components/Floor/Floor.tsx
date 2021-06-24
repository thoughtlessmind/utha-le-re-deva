import { AppContext } from 'contexts'
import { LiftButton, Button } from 'GlobalComponents'
import { useContext } from 'react'
import { Floor as FloorType } from 'types'
import styles from './floor.module.scss'

type FloorProps = {
  floorData: FloorType
}

const Floor = (props: FloorProps): JSX.Element => {
  const { floorData } = props

  const {
    state: { totalFloors }
  } = useContext(AppContext)

  return (
    <div className={styles.floorContainer}>
      <div className={styles.controleArea}>
        <p className={styles.floorName}>{floorData.name}</p>
        <div className="flex items-center gap-6 my-auto pt-4">
          {totalFloors !== floorData.floorNumber + 1 && (
            <LiftButton btnType="up" pressed={floorData.clickedpUp} />
          )}
          {floorData.floorNumber !== 0 && (
            <LiftButton btnType="down" pressed={floorData.clickedDown} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Floor
