import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'

const Login = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState("")
    const [pw, setPw] = useState("")
    const [isValidUsername, setisValidUsername] = useState(null)
    const [isValidPassword, setisValidPassword] = useState(null)

    const handleLogin = () => {
        if(username == import.meta.env.VITE_USERNAME && pw == import.meta.env.VITE_PASSWORD){
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
        
    }
  return (
    <div className='login'>
      <TextField id="filled-basic" label="usnermaen" variant="filled" value={username} onChange={(e)=>setUsername(e.target.value)} error={!isValidUsername && isValidUsername != null} onBlur={()=>{setisValidUsername(username == import.meta.env.VITE_USERNAME)}}/>
      <TextField id="filled-basic" label="passswrdo" type='password' variant="filled" value={pw} onChange={(e)=>setPw(e.target.value)} error={!isValidPassword && isValidPassword != null} onBlur={()=>{setisValidPassword(pw == import.meta.env.VITE_PASSWORD)}}/>
      <Button sx={{marginTop:"5px"}} variant="outlined" onClick={handleLogin}>login</Button>
    </div>
  )
}

export default Login
