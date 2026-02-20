import React from 'react'
import Sectiont2 from './components/Section2/Sectiont2'
import Sectiont1 from './components/Section1/Sectiont1'
import Page1content from './components/Section1/Page1content'



const App = () => {
  const users =  [
   { img : 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro: '', 
    tag: 'Satisfied',
    color: 'pink'
},
    {
    img : 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro: '', 
    tag: 'UnderServe',
    color:"royalblue"
  },
    {
      img:'https://images.unsplash.com/photo-1762341114881-669da93fef88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    intro: '', 
    tag: 'UnderBanked',
    color:'lightseagreen',
  }
    
]
  return (
    <div>
      <Sectiont1 users={users}/>
      <Sectiont2 />
    </div>
  )
}

export default App
