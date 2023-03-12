import { useState } from "react";


const NewTodos = () => {
    const [task,setTask]=useState("");
    const [status,setStatus]=useState("");
    const [tag,setTag]=useState("")

    const handleSubmit=()=>{
        
        const payload={
            task,
            status,
            tag
        }
     console.log(payload)
     
        fetch("http://localhost:8005/create",{
            method: 'POST', 
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2OGJkNTZjZGNjYzE5YmY4OWVlMWM2IiwiaWF0IjoxNjY3ODA5MTk3fQ.Hrw99-G3SYLN6kb_fUvuPp06PvWWnsGoiTLpBq2tTU8',  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)}
            )
            .then((res)=>res.json())
            .then(res=>{   
            console.log(res)    
        })
    }
  return (
    <div>
      <h1>welcoem to Todos-list page</h1>
      <input type="text" placeholder="taskname" onChange={(e)=>setTask(e.target.value)}/>
      <input type="text" placeholder="status" onChange={(e)=>setStatus(e.target.value)} />
      <input type="text" placeholder="tag" onChange={(e)=>setTag(e.target.value)}/>
      <button onClick={handleSubmit}>Todo-List</button>
    </div>
  )
}

export default NewTodos

