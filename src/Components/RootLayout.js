import React from 'react'
import NavBar from './NavBarPanel'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <NavBar/>

      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default RootLayout