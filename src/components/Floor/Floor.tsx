import { AppContext } from 'contexts'
import { LiftButton } from 'GlobalComponents'
import { useContext } from 'react'
import { removeFloor } from 'state/reducer'
import { Floor as FloorType } from 'types'
import styles from './floor.module.scss'

type FloorProps = {
  floorData: FloorType
}

const Floor = (props: FloorProps): JSX.Element => {
  const { floorData } = props

  const {
    state: { totalFloors },
    dispatch
  } = useContext(AppContext)

  return (
    <div className={styles.floorContainer}>
      <div className={styles.controleArea}>
        <p className={styles.floorName}>Floor {floorData.floorNumber}</p>
        <div className="flex items-center gap-6 my-auto pt-4">
          {totalFloors !== floorData.floorNumber + 1 && (
            <LiftButton btnType="up" pressed={floorData.clickedpUp} />
          )}
          {floorData.floorNumber !== 0 && (
            <LiftButton btnType="down" pressed={floorData.clickedDown} />
          )}
        </div>
      </div>
      {floorData.floorNumber > 0 && (
        <div className={styles.removeFloorbuttons}>
          <button onClick={() => dispatch(removeFloor(floorData.id))}>
            &#x2715;
          </button>
        </div>
      )}
    </div>
  )
}

export default Floor
