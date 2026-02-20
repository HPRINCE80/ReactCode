import React from 'react'
import 'remixicon/fonts/remixicon.css'
import CardRight from './CardRight'

const RightConyent = (props) => {
  return (
    <div className='h-full flex  overflow-x-auto flex-nowrap gap-10 p-6 w-2/3 ' >
      {props.user.map(function(elem,idx){
        return  <CardRight key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
      })

      }
      </div>
  )
}

export default RightConyent
