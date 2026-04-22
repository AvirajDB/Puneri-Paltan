import React, { useEffect, useState } from 'react'
import hero from '../assets/home-banner-new-design-s12.webp'
import ticket from '../assets/buy-tickets-homepage_s12.png'
import ticket1 from '../assets/tickets.png'
import { Players } from './API'

// import '../'

const Home = () => {
   
  const[players , setPlayers] = useState([]);

  useEffect ( ()=>{
     Players().then(setPlayers).catch(console.error);
  },[])

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
                 {players.map((e)=>(
                      <img src={e.profile_image} alt={e.name} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }} />
                 ))}
                 
                <button>p</button>
                <button>N</button>
                <button className='enter'>Enter</button>
               </div>
          </div>
        </div>
        <div className='home-comp3'>
          <div className='ticket' > <img src={ticket} className='ticket-img'/> <button className='enter'>ENTER</button></div>
          <div className='ticket1'> <img src={ticket1} className='ticket-img'/></div>
        </div>

      </div>
    </>
  )
}

export default Home