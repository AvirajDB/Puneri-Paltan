import React from 'react'
import hero from '../assets/home-banner-new-design-s12.webp'

// import '../'

const Home = () => {
  return (
    <>
      <div className='hero-img'>
        <img src={hero} alt=""  className='img'/>
        <div className='home-comp1'>
           <h1 className='scroll'>SCROLL</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus et reprehenderit accusantium aspernatur at placeat aperiam, consectetur est sint quidem officia molestias. Cum sequi harum facilis nisi nam ut.</p>
        </div>

      </div>
    </>
  )
}

export default Home