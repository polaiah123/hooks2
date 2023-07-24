import React, {useReducer} from 'react'

const intitialvalue=0
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state -1
        case 'intial':
            return intitialvalue
        default:
            return state
    }
}

function useReduceEx() {
    const [count,dispatch] =  useReducer(reducer,intitialvalue)

    
    return (
        <div>
             <div>count - {count}</div>
            <button onClick={()=>dispatch('increment')}> Increment</button>
            <button onClick={()=>dispatch('decrement')}> decrement</button>
            <button onClick={()=>dispatch('intial')}> Intial value</button> 
        </div>
       
    )
}

export default useReduceEx
