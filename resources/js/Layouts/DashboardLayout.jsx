import React from 'react'
import DashboardSidebar from './DashboardSidebar'

function DashboardLayout({children}) {
  return (
    <div className='flex bg-gray-100'>
        <div className='fixed top-0 left-0 md:left-64 right-0 z-10 bg-primary-2 md:bg-gray-50 h-12'>
            Navbar
        </div>
        <div className='hidden md:block md:fixed top-0 left-0 w-64 min-h-screen bg-white shadow'>
            <DashboardSidebar/>
        </div>
        <div className='flex-1 mt-16 ml-0 md:ml-64 min-h-[100vh]'>{children}</div>
        {/* <Modal/> */}
    </div>
  )
}

export default DashboardLayout