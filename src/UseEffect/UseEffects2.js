import React,{useState,useEffect} from 'react'

const UseEffects2 = () => {
    const [widths, setWidth] = useState(window.innerWidth);
    const actualWidth  =()=> setWidth(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize',actualWidth);
        return ()=>{
            window.removeEventListener('resize',actualWidth)
        }
    })
    return (
        <div>
            <h2>My window size is {widths}</h2>
        </div>
    )
}

export default UseEffects2
