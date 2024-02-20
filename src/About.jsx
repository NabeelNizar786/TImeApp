import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
const About = () => {

    const navigate = useNavigate();

    const isHomePage = location.pathname === '/'

  return (
    <>
  <div className='Nav'>
    <p>TIME APP</p>
    {!isHomePage && (
      <p><button onClick={()=>navigate(-1)}>Back</button></p>
    )}
  </div>

<div className='about'>
    <p>Welcome to Time App, a simple and elegant way to keep track of the current time. Our application provides you with an accurate and real-time display of the current time, including hours, minutes, and seconds. Whether you're checking the time for work, study, or leisure, Time App has you covered.</p>
</div>
</>
  )
}

export default About