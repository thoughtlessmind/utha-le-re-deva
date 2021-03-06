import React, { FC, useContext } from 'react'
import { AppContext } from 'contexts'
import { addNewFloor } from 'state/reducer'

const Header: FC = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <header className="sticky top-0 w-screen h-header bg-primary shadow flex items-center justify-between px-4 md:px-8 z-50">
      <h1 className="text-xl font-medium text-white cursor-pointer">Lift Up</h1>
      <div className="flex items-center gap-4 ">
        <button onClick={() => dispatch(addNewFloor())}>Add Floor</button>
      </div>
    </header>
  )
}

export default Header
