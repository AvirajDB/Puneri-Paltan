import axios from 'axios'
import React from 'react'

export const Players =  async() => {
    const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/player_list?cat_id=1`)
  return (
      response.data 
  )
}
