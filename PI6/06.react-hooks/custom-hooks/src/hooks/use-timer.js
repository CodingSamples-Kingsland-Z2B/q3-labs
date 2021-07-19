import { useState, useEffect } from "react"

const useTimer = (max, interval)=>{

const [timer, setTimer] = useState((0).toLocaleString('en-us', {minimumIntegerDigits:2}));

useEffect(()=>{
  const id = setInterval(()=>{
      setTimer((prev)=>{
        if(Number(prev) >=max){
          return 0
        }
        return (Number(prev) +1).toLocaleString('en-us', {minimumIntegerDigits:2});
      })
  }, interval)

 return ()=>{
    clearInterval(id)
 }
}, [interval, max])


return timer
}

export default useTimer