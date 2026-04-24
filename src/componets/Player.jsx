import React, { useEffect, useState } from 'react'
import { Raiders, Defenders, Allrounders, } from './API';

const Player = () => {

  const[raiders , setRaiders] = useState([]);
  const[defenders , setDefenders] = useState([]);
  const[allrounders, setAllrounders] = useState([]);

  useEffect ( ()=>{
     Raiders().then(setRaiders).catch(console.error);
  },[])
  useEffect(()=>{
     Defenders().then(setDefenders).catch(console.error);
  },[])
  useEffect(()=>{
    Allrounders().then(setAllrounders).catch(console.error)
  })
  return (
  <>
    <div className='Sub-hero'>
          <h1>Players</h1>    
    </div>
    <div className='players-details'>
    <h1>RAIDERS</h1>
      <div className='players'>
    {
      raiders === null ? (
        <></>
      ): (
        <>
        {
          raiders.map((e) =>(
            <div className='players1'>
            <img key={e.id} src={e.profile_image} alt={e.name} style={{ height: "320px", objectFit: "cover", borderRadius: "8px" }} />
            <h2>{e.name}</h2>
            </div>
         ))
        }
        </>
      )
    }
      </div>
    </div>
    <div className='players-details'>
    <h1>DEFENDERS</h1>
      <div className='players'>
    {
      defenders === null ? (
        <></>
      ): (
        <>
        {
          defenders.map((e) =>(
            <div className='players1'>
            <img key={e.id} src={e.profile_image} alt={e.name} style={{ height: "320px", objectFit: "cover", borderRadius: "8px" }} />
            <h2>{e.name}</h2>
            </div>
         ))
        }
        </>
      )
    }
      </div>
    </div>
    <div className='players-details'>
    <h1>ALL Rounders</h1>
      <div className='players'>
    {
      allrounders === null ? (
        <></>
      ): (
        <>
        {
          allrounders.map((e) =>(
            <div className='players1'>
            <img key={e.id} src={e.profile_image} alt={e.name} style={{ height: "320px", objectFit: "cover", borderRadius: "8px" }} />
            <h2>{e.name}</h2>
            </div>
         ))
        }
        </>
      )
    }
      </div>
    </div>
  </>
  )
}

export default Player