import React from 'react'
import Logo from '../images/VC_horizontal_white.png'

function Spotlight () {
  return (
    <div className='wwvce-spotlight'>
      <img
        src={Logo}
        alt='Who Wants to Be a Visual Composer expert?'
        className='wwvce-spotlight-logo'
      />
      <h1 className='wwvce-spotlight-title'>Who Wants to Be a Visual Composer expert?</h1>
    </div>
  )
}

export default Spotlight
