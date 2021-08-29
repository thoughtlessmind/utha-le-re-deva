import { useContext, FC } from 'react'
import { AppContext } from 'contexts'
import Floor from 'components/Floor'
import Lift from 'components/Lift'
import styles from './floors.module.scss'

const Floors: FC = () => {
  const {
    state: { floors, liftStatus }
  } = useContext(AppContext)

  return (
    <div className="relative">
      {floors.map((floor) => (
        <Floor floorData={floor} key={floor.id} />
      ))}
      <div className={styles.allLiftsContainer}>
        <div className="relative h-full w-full">
          {liftStatus.map((lift) => (
            <Lift key={lift.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Floors
