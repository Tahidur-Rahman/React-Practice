import React,{useState,useEffect} from 'react'

function UseEffects() {
    const [count, setcount] = useState(0);
    useEffect(() => {
        if(count)document.title = `count(${count})`
    },[count])
    return (
        <div>
            <h1>Hello World !</h1>
            <h2>New message <span>{count}</span></h2>
            <button onClick={()=>setcount(count+1)}>Raise</button>
        </div>
    )
}

export default UseEffects
