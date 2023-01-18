import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const FirstHook=()=>
{
    const[user,setUser]=useState(" ")
    
    const print=()=>
    {
        alert(user+'has added successfully')
    }

    const result=(temp)=>
    {
        setUser(temp.target.value)
    }

    return(
        <>
            <input type="text" placeholder="Enter your name" name={user} onChange={result} />
            <button className="btn btn-outline-danger" onClick={print}>Click</button>
        </>
    )
}