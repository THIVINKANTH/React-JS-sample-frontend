import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export const TernaryOperator=()=>
{
    const[wish,setWish]=useState("Nothing")
    const[result,setResult]=useState("")
    const[changes,setChanges]=useState({color:'red',backgroundColor:'black'})

    const trigger=(temp)=>
    {
        setWish(temp.target.value)
    }
    const ternarsample=()=>
    {
        (wish==='spring')?
        setChanges({color:'green',backgroundColor:'black'}):
        (wish==='winter')?
        setChanges({color:'seagreen',backgroundColor:'black'}):
        (wish==='rainy')?
        setChanges({color:'blue',backgroundColor:'black'}):
        (wish==='summer')?
        setChanges({color:'yellow',backgroundColor:'black'}):

        setChanges({color:'red',backgroundColor:'black'})

        setResult(wish)
    }
    return(
        <>
        <input type="text" placeholder="Enter your favoriate season" onChange={trigger} />
        <button onClick={ternarsample} className="btn btn-outline-secondary">send</button>
        <p style={changes}>
            {result}
        </p>
        </>
    )
}