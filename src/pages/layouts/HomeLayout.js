import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/header-components/Header'
const HomeLayout = () => {
  return (
    <div className='h-full flex flex-col w-full bg-[#F7FAFC] overflow-auto'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default HomeLayout