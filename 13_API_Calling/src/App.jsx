import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list")
    console.log(response.data)
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Click</button>

      <div>
        {data.map(function (elem, idx) {
          return <h3 >Prince {idx}</h3>
        })}
      </div>

    </div>
  )
}

export default App