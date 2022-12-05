import React from 'react'

const Notification = ({text}: {text: string}) => {
  return (
    <div className='notification'>
        <p>{text}</p>
    </div>
  )
}

export default Notification