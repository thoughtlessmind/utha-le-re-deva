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
        <div className="relative h-full w-full flex justify-center items-end gap-6">
          {liftStatus.map((lift, index) => (
            <Lift liftIndex={index} liftStatus={lift} key={lift.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Floors
