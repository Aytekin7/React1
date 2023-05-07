
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React, {useState} from 'react'


function App() {
  const[count, setCount]=useState(true)
 

  return (
    <div className='show'>
     {
      count?<p className='text'>This is Text</p>:null
     }
     <button className='button' onClick={()=>setCount(true)}>Show</button>
      <button className='button' onClick={()=>setCount(false)}>Hide</button>  
      {/* <button className='toogle' onClick={()=>setCount(!count)}>Toogle</button> */}
  
    
    </div>
  )
}

export default App




