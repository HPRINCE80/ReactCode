import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achanging(){
    console.log('A ki Change ho gyi->')
  }
  function bChanging() {
    console.log('B ki value Change ho gyi->')
  }
useEffect(function(){
  achanging()
},[a])

useEffect(function(){
  bChanging()
},[b])
  return (
    <div>
      <button onClick={() =>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={() =>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
