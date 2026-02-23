import React, { useState } from 'react'

const App = () => {
  const [tittle, setTittle] = useState('')
  const sumbitHandlear= (e) => {

    e.preventDefault();
    console.log("Form Submited by",tittle);
    setTittle('')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        sumbitHandlear(e)
      }}>
      <input 
      type='text'
      placeholder='Enter the Name'
      value={tittle}
      onChange={(e)=>{
        setTittle(e.target.value);
      }}
      />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
