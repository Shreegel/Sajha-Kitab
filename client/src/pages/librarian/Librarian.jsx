import React from 'react'
import { Outlet } from 'react-router-dom'

const Librarian = () => {
  return (
    <div>
        <h1>Libriaran</h1>
        <div>
            {<Outlet/>}
        </div>
    </div>
  )
}

export default Librarian