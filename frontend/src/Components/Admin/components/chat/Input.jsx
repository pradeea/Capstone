import React from 'react'

const Input = () => {
  const chatInput = () =>{
    console.log(`chat msg test`)
  }
  return (
    <div className='input'>
        <input type="text" className='inputfield' placeholder='write a message' />
        <button>Send</button>
    </div>
  )
}

export default Input