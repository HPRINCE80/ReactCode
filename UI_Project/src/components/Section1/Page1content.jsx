import React from 'react'
import LeftContent from './leftContent'
import RightConyent from './RightConyent'

const Page1content = (props) => {
  console.log(props.users)
  return (
    <div className='pb-16 px-18 pt-6 flex gap-10 h-[90vh] item-center'>
        <LeftContent/>
        <RightConyent user={props.users}/>

    </div>
  )
}

export default Page1content
