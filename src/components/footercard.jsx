import React from 'react'

export default function Footercard(props) {
  return (
    <div className='bg-[#F8FBFB] rounded-3xl'>
        <p className='text-center text-gray-400 py-5'>{props.foot.para}</p>
    </div>
  )
}