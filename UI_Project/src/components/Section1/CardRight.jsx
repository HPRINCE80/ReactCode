import React from 'react'
import CardContent from './CardContent'

const CardRight = (props) => {
    
  return (
    <div className='h-full w-80 bg-red-500  rounded-4xl  overflow-hidden relative'>
      <img className='h-full w-full object-cover ' src={props.img} alt=''/>
      <CardContent color={props.color} id={props.id} tag={props.tag} />
      
    </div>
  )
}

export default CardRight
