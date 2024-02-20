import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const[date, setDate] = useState(() => new Date());

  useState(()=>{
    const intervalId = setInterval(()=>{
      setDate(new Date())
    },1000)

    return ()=> clearInterval(intervalId)
  },[])

  const isHomePage = location.pathname === '/' 

  const Time =(date.getHours() % 12 || 12 < 10 ? '0' : '') + 
  (date.getHours() % 12 || 12 ) + ":" +  (date.getMinutes() < 10 ? '0' : '')  
  + date.getMinutes()  + ":" + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + (date.getHours() >= 12 ? ' PM' : ' AM')

  return (
    <>
    <div className='Nav'>
    <p>TIME APP</p>
    {!isHomePage && (
      <button onClick={navigate(-1)}>Back</button>
    )}
    <Link to='/About'><p>ABOUT</p></Link>
  </div>
    <div className='container'>
      <div className='card'>
        <div className='App'>
          <h1>CURRENT TIME</h1>
        </div>
        <div>
          <h2 className='time'>{Time}</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
