import React,{useState} from 'react'

 function Hookcounter() {

    const [count, setcount]=useState(0)
    // console.log({count})
    const Increment=()=>{
        //alert('message')
         for(let i=0;i<5;i++){
         setcount(prevCount=>prevCount+1)
    }
    
}
 const IncrementToFive=()=>
{
    setcount(count+5)
}

    
    return (
        <div>
            Count: {count}
            <button onClick={()=>setcount(count+1)}>Button Cliked {count} times</button>
            <button onClick={Increment}>Increment </button>
            <button onClick={IncrementToFive}>Increment by five </button>
        </div>
    )
}
export default Hookcounter
