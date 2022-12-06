import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={` ${showNotification ? '' : 'hidden'} text-center mt-6`}>
      <p className='text-white text-base'>You have already entered this letter</p>
    </div>
  )
}

export default Notification