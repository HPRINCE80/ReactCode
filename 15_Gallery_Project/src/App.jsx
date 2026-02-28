import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
  
  
  const getdata = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  
    setuserData(response.data)
    console.log(response)
    
  }
  useEffect(function(){
    getdata()

  },[index])
  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }

  return (
  <div className='bg-black overflow-auto h-screen p-4 text-white'>
   
    <div className='flex flex-wrap gap-4 p-2 h-[82%]'>
      {printUserData}
    </div>
    <div className='gap-6 items-center p-4 flex justify-center'>
    <button
    onClick={() =>{
      if(index > 1){
        setindex(index -1)
        setuserData([])
      }
    }}
    style={{ opacity: index == 1 ? 0.6 : 1 }}
     className='bg-amber-400 text-black rounded p-2 active:scale-95 font-semibold cursor-pointer'>
      Prev</button>
    <h4>Page {index}</h4>
    <button 
    onClick={() => {
      setuserData([])
      setindex(index+1)
    }}
    className='bg-amber-400 text-black rounded p-2 active:scale-95 font-semibold cursor-pointer'>
      Next</button>
    </div>
  </div>
  )
}

export default App
