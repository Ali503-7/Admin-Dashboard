import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Super_components/Header/Header'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="my-[65px] overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout