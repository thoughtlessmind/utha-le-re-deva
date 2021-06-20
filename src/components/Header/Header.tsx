import React, { FC, useContext, useEffect } from 'react'
import { AppContext } from 'contexts'
import { test } from 'state/reducer'

const Header: FC = () => {
  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    console.log(dispatch(test()))
  }, [])

  return (
    <header className="fixed w-screen h-header bg-primary-main shadow flex items-center px-4 md:px-8 ">
      <h1 className="text-xl font-medium text-white cursor-pointer">Lift Up</h1>
    </header>
  )
}

export default Header
