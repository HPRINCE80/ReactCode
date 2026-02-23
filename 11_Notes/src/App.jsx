import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  const sumbitholder = (e) => {
    e.preventDefault()
    const copytask = [...task];
    copytask.push({title,details})
    settask(copytask)
    settitle('')
    setdetails('')
  }
  const DeleteNote = (idx) => {
     const copytask = [...task]
     copytask.splice(idx,1)
     settask(copytask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        sumbitholder(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
      <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
        <input 
        type='text'
        placeholder='Enter the topic'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}

        />
        <textarea 
        type="text"
        placeholder='Enter the Details '
        className='px-5 w-full font-medium py-2 outline-none border-2 rounded h-32 flex items-start flex-row  '
        value={details}
        onChange={(e) => {
          setdetails(e.target.value)
        }}
        
        />
        <button className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>Add Notes</button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className='text-4xl font-bold'>React Notes</h1>
        <div className='flex flex-wrap h-[90%] justify-satrt items-start gap-5 mt-6 overflow-auto'>
          {task.map(function(elem,idx){
           
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
          </div>
          <button onClick={() => {
            DeleteNote(idx)
          }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
         })}
        </div>
      </div>
    </div>
  )
}

export default App
