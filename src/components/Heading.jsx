import React from 'react'

export default function Heading(props) {
  return (
    <div className='flex items-center   bg-white rounded-tl-3xl rounded-tr-3xl'>
      <strong className='p-16 py-10 text-4xl'>{props.data.head}</strong>
      <hr className='w-[10rem] h-1  bg-[#dd2476]' />
    </div>
  )
}

