import React from 'react'

const App = () => {
  const sumbitHandlear= (e) => {

    e.preventDefault();
    console.log("Form Submit")
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        sumbitHandlear(e)
      }}>
      <input type='text' placeholder='Enter the Name'/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
