import React, { useState } from 'react'

const Login = () => {
    // const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=()=>{
        const payload={
            email,password
        }
        console.log(payload)
        fetch("http://localhost:8005/login",{
            method: 'POST', 
            headers: {
           'Content-Type': 'application/json'},
            body: JSON.stringify(payload)}
            )
            .then((res)=>res.json())
            .then(res=>{
            localStorage.setItem("token",res.token)
            console.log(res.token)    
        })
    }
  return (
    <div>
      <h1>welcoem to Login page</h1>
      {/* <input type="text" placeholder='enter your name'
      onChange={(e)=>{setName(e.target.value)}}/> */}
      <input type="email" placeholder='enter your email '   onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="enter your password" 
    
      onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>LOGIN</button>
    </div>
  )
}

export default Login

