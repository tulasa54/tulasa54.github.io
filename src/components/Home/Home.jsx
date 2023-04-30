import React from 'react'
import "./home.css"
import photo from './../../pictures/linkedIn.jpeg'

function Home() {
  return (
    <main>
      <div className='head'></div>
      <image>
        <img src={photo} className='pic'></img>
      </image>
      <div>
        <p>Hello World!</p>
        <p>Thank you for visiting my website. Due to some backend issues, we will be back by May 5th, 2023.</p>
      </div>
   </main>
  )
}

export default Home
