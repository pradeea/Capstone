import { Avatar } from '@mui/material'
import React from 'react'

const Message = () => {
  // Dummy data
  const dummyAvatarText = 'JD'; // Initials for a user's name
  const dummyMessageText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum metus id felis elementum, vitae vestibulum libero interdum.'; // Placeholder message text

  return (
    <div className='message owner'>
      <div className="messageinfo">  
        <Avatar sx={{ width: 30, height: 30 }}>{dummyAvatarText}</Avatar> 
      </div>
      <div className="messagecontent">
        <p className='texts'>{dummyMessageText}</p>
      </div>
    </div>
  )
}

export default Message