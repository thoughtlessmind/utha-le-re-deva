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
        <Floor
          clickedDown={floor.clickedDown}
          clickedUp={floor.clickedpUp}
          floorName={floor.name}
          key={floor.name}
        />
      ))}
    </div>
  )
}

export default Floors
