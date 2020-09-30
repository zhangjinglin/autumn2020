import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavLink from './NavLink'

export default () => {
  const [showMenu, setShowMenu] = useState(false)

  let menu = (
    <div className='fixed bg-white top-0 left-0 h-full w-3/5 z-50'>
      <div className='bg-indigo-600 text-indigo-200 p-3'>Menu</div>
      <ul>
        <li>
          <NavLink to='/' menu='Home' closeMenu={() => setShowMenu(false)} />
        </li>
        <li>
          <NavLink to='/add' menu='Add' closeMenu={() => setShowMenu(false)} />
        </li>
        <li>
          <NavLink
            to='/about'
            menu='About'
            closeMenu={() => setShowMenu(false)}
          />
        </li>
      </ul>
    </div>
  )

  let menuMask = (
    <div
      className='bg-black-t-50 fixed top-0 left-0 w-full  h-full z-50'
      onClick={() => setShowMenu(false)}></div>
  )

  return (
    <nav>
      <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      {showMenu ? menuMask : ''}
      {showMenu ? menu : ''}
    </nav>
  )
}
