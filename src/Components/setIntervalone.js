import React,{useEffect, useState} from 'react'

function SetIntervalone() {
const [count, Setcount] = useState(0)

  const Tick =()=>{
      Setcount(count+1)
  }
  useEffect(()=>{
  const Interval= setInterval(Tick ,1000)

  const rinterval=clearInterval(20)
  return () => {
  clearInterval(Interval)
  clearInterval(rinterval)
  }
  })
    return (
        <div>
          <h2>  {count}</h2>
        </div>
    )
}

export default SetIntervalone
