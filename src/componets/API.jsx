import axios from 'axios'
import React from 'react'

export const Raiders =  async() => {
    const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=1`)
  return (
      response.data 
  )
}
export const Defenders =  async() => {
    const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=2`)
  return (
      response.data 
  )
}

export const Allrounders = async() => {
  const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=3`)
    return (
      response.data 
  )
}
