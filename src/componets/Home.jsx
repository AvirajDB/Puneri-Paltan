import React from 'react'
import hero from '../assets/home-banner-new-design-s12.webp'

// import '../'

const Home = () => {
  return (
    <>
      <div className='hero-img'>
        <img src={hero} alt=""  className='img'/>
        <div className='home-comp1'>
           <h4 className='scroll'>SCROLL</h4>
           <p className='home-comp1-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus et reprehenderit accusantium aspernatur at placeat aperiam, consectetur est sint quidem officia molestias. Cum sequi harum facilis nisi nam ut.</p>
          <div className='home-com2'>
               <h2>Players</h2>
               <div className='home-playerslider'>
                <button>p</button>
                <button>N</button>
                <button className='enter'>Enter</button>
               </div>
          </div>
        </div>
        <div className='home-comp3'>
           

        </div>

      </div>
    </>
  )
}

export default Home