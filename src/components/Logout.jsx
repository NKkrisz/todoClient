import React from 'react'
import { Button } from '@mui/material'

const Logout = ({setIsLoggedIn}) => {
  return (
    <Button onClick={()=>setIsLoggedIn(false)} sx={{position:"fixed", bottom:"0px", left:"0px", color:"red", background:"purple"}} variant="text">Looooogout</Button>
  )
}

export default Logout
