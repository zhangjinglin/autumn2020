import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

export default () => {
  const [emps, setEmps] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:5000/employees').then((response) => {
      setEmps(response.data)
    })
  }, [])

  return (
    <div>
      <ul>
        {emps.map((e) => (
          <div className='md:flex bg-white rounded-lg p-6 shadow-2xl'>
            <img
              className='h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto'
              src={e.avatar}
              alt='avatar'
            />
            <div class='text-center md:text-left'>
              <h2 class='text-lg'>{e.name}</h2>
              <div class='text-purple-500'>{e.id}</div>
              <div class='text-gray-600'>{e.email}</div>
              <div class='text-gray-600'>{e.phone}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
