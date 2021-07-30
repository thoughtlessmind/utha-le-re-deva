import React, { FC, useContext, useEffect } from 'react'
import { AppContext } from 'contexts'
import { test } from 'state/reducer'
import { Button } from 'GlobalComponents'

const Header: FC = () => {
  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    console.log(dispatch(test()))
  }, [])

  return (
    <header className="fixed w-screen h-header bg-primary shadow flex items-center justify-between px-4 md:px-8 ">
      <h1 className="text-xl font-medium text-white cursor-pointer">Lift Up</h1>
      <div className="flex items-center gap-4 ">
        <Button>Add Floor</Button>
        {/* <Button>Add Lift</Button> */}
      </div>
    </header>
  )
}

export default Header
