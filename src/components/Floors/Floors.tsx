import { useContext, FC } from 'react'
import { AppContext } from 'contexts'
import Floor from 'components/Floor'

const Floors: FC = () => {
  const {
    state: { floors }
  } = useContext(AppContext)

  return (
    <div className="">
      {floors.map((floor) => (
        <Floor floorData={floor} key={floor.name} />
      ))}
    </div>
  )
}

export default Floors
