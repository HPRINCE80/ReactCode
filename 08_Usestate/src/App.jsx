import React, { useState } from 'react'

const App = () => {
    const[num , setnum] = useState(0)
    function increaseNum(){
        setnum(num+1)

    }
    function DecreaseNum(){
        setnum(num-1)
    }
    function In5(){
        setnum(num+500)
    }
  return (
    <div >
        <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <button onClick={In5}>Increase 5</button>
    </div>
  )
}

export default App
