import React, {useState, useEffect, useRef} from 'react'

function Timer() { 
  
  const [timer, setTime] = useState(0);
  const [status, setStatus] = useState(true);
  const intervalRef = useRef(null);
  useEffect(() =>{
    intervalRef.current  = setInterval(() =>{
        setTime(prevTimer => prevTimer + 1)
    }, 1000)

    return () =>{
        window.clearInterval(intervalRef.current)
    }
  },[])

    return (
    <div>
        Time : {timer}
        <button onClick={() => {
            status?clearInterval(intervalRef.current) : 
            setStatus(!status)
            }>{status?"stop":"start"} timer</button>
    </div>
  )
}

export default Timer