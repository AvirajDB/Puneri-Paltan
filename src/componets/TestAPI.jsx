import React, { useEffect, useState } from 'react'

import axios from 'axios';


const TestAPI = () => {

const [playerDetails, setPlayerDetails] = useState([])
   
 useEffect (()=>{

    const fetchData = async ()=>{
        try{

        // const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=1`)
        // const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=1`)
        const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/single_player?id=1`)
        // const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/season_list`)
        // const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/gallary_list?cat_id=3`)
        // const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/single_gallary?id=1`)
        // const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/puneri_tv_list?cat_id=1`)
        // const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/puneri_tv_list?cat_id=1`)
        console.log(response.data)
        setPlayerDetails(response.data)
        

    }catch(error){
         
        console.log('error', error)

    }
    };
   fetchData();
 },[])
 

  return (
    <>
    {
  playerDetails === null ? (
    <></>
  ) : (

     playerDetails.map((e)=>{
       
       return(

        <div key={e.id} style={{width:"200px" ,heigth:"200px", border : "1px solid black", backgroundColor:"red"}}>
        {/* <div> */}
        <img src={e.profile_image} alt={e.name} style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }} />
        <img src={e.full_image} alt={e.name} style={{ width: "120px", height: "208px", objectFit: "cover", borderRadius: "8px" }} />
        <h1>{e.name}</h1>
        <h2>{e.cat_name}</h2>
        </div>

       )

     })
      )
}

    </>


  )
}

export default TestAPI