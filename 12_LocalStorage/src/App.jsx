import React from 'react'

const App = () => {
  const user = {
    username: "Prince",
    age: 20,
    city:"Bareilly"
  }
  localStorage.setItem('user',JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera)
  console.log(user.username)
  return (
    <div>
      Prince
    </div>
  )
}

export default App
