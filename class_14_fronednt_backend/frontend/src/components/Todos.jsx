// import React, { useState } from 'react'

import { useEffect, useState } from "react";

const Todos = () => {
    const [data,setData]=useState("");
    const handleSubmit=()=>{
 
        fetch("http://localhost:8005/todos",{
            method: 'GET', 
            headers: {
           'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2OGJkNTZjZGNjYzE5YmY4OWVlMWM2IiwiaWF0IjoxNjY3ODA5MTk3fQ.Hrw99-G3SYLN6kb_fUvuPp06PvWWnsGoiTLpBq2tTU8'},
        //     body: JSON.stringify(payload)
        }
            )
            .then((res)=>res.json())
            .then(res=>{
            // localStorage.setItem("token",res.token)
            setData(res.user)
            console.log(res.user)  
            // res.send({user:res.user})  
        })

     
    }
    useEffect(()=>{
        console.log("useeffect")
       },[data])

  return (
    <div>
      <h1>welcoem to Todos-list page</h1>
      <button onClick={handleSubmit}>Todo-List</button>
      {
      data.length>0 &&
       data.map(elem=>(
        <div>
               <p>{`${elem.taskname}+${elem.status}+${elem.tag}`}</p>
               
        </div>
    
       )
       
       )
       }
      
      
    </div>
  )
}

export default Todos

