import React,{useState,useEffect} from 'react'

function UseEffectone() {
    const [count, setstate] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('conditional updating')
        document.title= `button clicked ${count} times`
        
    },[count])

    return (
        <div> 
            <input type="text"
            value={name}
            onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setstate(count+1) }>{count} Increment times</button>
        </div>
    )
}

export default UseEffectone
