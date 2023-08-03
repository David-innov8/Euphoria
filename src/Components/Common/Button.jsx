import React from 'react'
import { Link } from 'react-router-dom'

function Button( props ) {
  return (
    <div className=' active:bg-[#8A33FD] py-2 active:text-white font-bold text-[#8A33FD] border-[#3C4242] border  rounded-lg'>
        <Link to={props.link} className='text-lg px-12  '>{props.name}</Link>
    </div>
  )
}

export default Button
