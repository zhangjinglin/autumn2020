import React from 'react'
import { Link } from 'react-router-dom'

export default ({ to, menu, closeMenu }) => {
  return (
    <Link
      to={to}
      className='text-blue-500 p-2 block mt-1 border-b'
      onClick={closeMenu}>
      {menu}
    </Link>
  )
}
