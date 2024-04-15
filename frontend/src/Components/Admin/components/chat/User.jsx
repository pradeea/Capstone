import React from 'react'

const User = () => {
  // Dummy data
  const users = [
    { name: 'John', status: 'online' },
    { name: 'Alice', status: 'offline' },
    { name: 'Bob', status: 'away' }
  ];

  return (
    <div className="chats">
      {users.map((user, index) => (
        <div className="userchat" key={index}>
          <span>{user.name}</span>
          <p>{user.status}</p>
        </div>
      ))}
    </div>
  )
}

export default User