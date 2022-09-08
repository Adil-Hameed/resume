import React from 'react'

export default function Aboutcard(props) {
    return (

        <div className={`bg-white py-5`}>
            <div className={`${props.card.color} ${props.card.space} container_fluid rounded-xl sm:flex sm:pl-0 pl-5 `}>
                <div className='mx-5'>
                    <img src={props.card.logo} alt="" className={`${props.card.width}`} />
                </div>
                <div className=''>
                    <strong className='text-2xl'>  {props.card.tittle}</strong>
                    <p className='pt-3 text-gray-500'>{props.card.para}</p>
                </div>
            </div>
        </div>)
}