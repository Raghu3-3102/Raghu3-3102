import React,{useState} from 'react'


function CodeEnter() {

    const [counter,setCounter] = useState(0)

    const increment = ()=>{
        setCounter(counter+1)
    }

    const decrement = ()=>{

        if (counter != 0) {
            setCounter(counter-1)
        }
        
    }

return(

    <>

     <div>{counter}</div>
     <button onClick={()=>{increment()}}>Increment</button>
     <button onClick={()=>{decrement()}}>Decrement</button>

    </>
)


}

export default CodeEnter

