import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/librarian/Navbar'
import { ClerkProvider } from '@clerk/clerk-react'

const Librarian = () => {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <div className='text-default min-h-screen bg-white'>
        <Navbar />
        <div>
          <Outlet/>
        </div>
      </div>
    </ClerkProvider>
  )
}

export default Librarian

//5:47