import React from 'react'
import './mainHome.css'
import LogotypeShadow from '../../assets/images/Logotype - Shadow.png'

function MainHome() {
  return (
    <div className='main'>
      <div className='main-logo'>
        <img
          src={LogotypeShadow}
          alt='Logo com shadow do The Git Search'
          width='730'
          height='410'
        />
      </div>
    </div>
  )
}

export default MainHome
