import React, { useState } from 'react'

const Signup = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=()=>{
        const payload={
            name,email,password
        }
        console.log(payload)
        fetch("http://localhost:8005/signup",{
            method: 'POST', 
            headers: {
           'Content-Type': 'application/json'},
            body: JSON.stringify(payload)}
            )
            .then((res)=>res.json())
            .then(res=>console.log(res))
    }
  return (
    <div>
      <h1>welcoem to signup page</h1>
      <input type="text" placeholder='enter your name'
      onChange={(e)=>{setName(e.target.value)}}/>
      <input type="email" placeholder='enter your email '   onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="enter your password" 
    
      onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Signup
