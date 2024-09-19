import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from './components/MainHeader'

function App() {

  return (
    <>
    <MainHeader />
    <Outlet />
    </>
  )
}

export default App
