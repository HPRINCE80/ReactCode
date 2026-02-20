import React from 'react'

const CardContent = (props) => {
    
  return (
    
    
      <div className='h-full w-full absolute  top-0 left-0 p-6   flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <p className='text-shadow-2xs text-xl leading-relaxed text-white '> I am a beggener software Engineer And my skills is HTML CSS JS React js And Node.js MongoDB</p>
        <div>
            <botton className='bg-white rounded-full font-medium px-8 py-2'>{props.tag}</botton>
            <botton className='bg-white rounded-full px-3 py-2 font-medium'><i className="ri-arrow-right-fill"></i></botton>
        </div>
      </div>
    
  )
}

export default CardContent
